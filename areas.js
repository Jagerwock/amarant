const areaData = [
  {
    name: 'Refugio de los No Muertos',
    img: 'images/asilo.jpg',
    walkthrough: `<p>Comienzo de tu aventura que culmina frente al <a href="#jefes" onclick="openBossModal('Demonio del Refugio'); return false;">Demonio del Refugio</a>.</p>`
  },
  {
    name: 'Burgo de los No Muertos',
    img: 'images/tauro.png',
    walkthrough: `<p>Zona inicial en la que te enfrentas al <a href="#jefes" onclick="openBossModal('Demonio de Tauro'); return false;">Demonio de Tauro</a>.</p>`
  },
  {
    name: 'Burgo Bajo de los No Muertos',
    img: 'images/aries.png',
    walkthrough: `<p>Calles oscuras con emboscadas antes de encontrar al <a href="#jefes" onclick="openBossModal('Demonio de Aries'); return false;">Demonio de Aries</a>.</p>`
  },
  {
    name: 'Parroquia de los No Muertos',
    img: 'images/campana.png',
    walkthrough: `<p>Asciende a la iglesia y toca la campana tras vencer a las <a href="#jefes" onclick="openBossModal('Gárgolas Campana'); return false;">Gárgolas Campana</a>.</p>`
  },
  {
    name: 'Profundidades',
    img: 'images/boquiabierto.png',
    walkthrough: `<p>Explora las cloacas hasta el enfrentamiento con el <a href="#jefes" onclick="openBossModal('Dragón Boquiabierto'); return false;">Dragón Boquiabierto</a>.</p>`
  },
  {
    name: 'Ciudad Infestada',
    img: 'images/queelag.png',
    walkthrough: `<p>Un descenso tóxico que termina ante <a href="#jefes" onclick="openBossModal('Quelaag la Bruja del Caos'); return false;">Quelaag</a>.</p>`
  },
  {
    name: 'Jardín Tenebroso',
    img: 'images/lunar.png',
    walkthrough: `<p>Pasea entre árboles encantados y desafía a la <a href="#jefes" onclick="openBossModal('Mariposa Lunar'); return false;">Mariposa Lunar</a>.</p>`
  },
  {
    name: 'Bosque Tenebroso',
    img: 'images/sif.png',
    walkthrough: `<p>Adéntrate en el bosque para encontrarte con <a href="#jefes" onclick="openBossModal('Sif, el Gran Lobo Gris'); return false;">Sif</a>.</p>`
  },
  {
    name: 'Fortaleza de Sen',
    img: 'images/golem.png',
    walkthrough: `<p>Supera las trampas y reclama la victoria sobre el <a href="#jefes" onclick="openBossModal('Golem de Hierro'); return false;">Golem de Hierro</a>.</p>`
  },
  {
    name: 'Anor Londo',
    img: 'images/ornstein.png',
    walkthrough: `<p>Llega al corazón de la ciudad para luchar contra <a href="#jefes" onclick="openBossModal('Ornstein & Smough'); return false;">Ornstein & Smough</a>.</p>`
  },
  {
    name: 'Mundo Pintado de Ariamis',
    img: 'images/priscilla.png',
    walkthrough: `<p>Un viaje alternativo que concluye frente a <a href="#jefes" onclick="openBossModal('Priscilla la Mestiza'); return false;">Priscilla</a>.</p>`
  },
  {
    name: 'Archivos del Duque',
    img: 'images/seath.png',
    walkthrough: `<p>Bibliotecas y cristal que custodia <a href="#jefes" onclick="openBossModal('Seath el Descamado'); return false;">Seath el Descamado</a>.</p>`
  },
  {
    name: 'Las Catacumbas',
    img: 'images/molinete.png',
    walkthrough: `<p>Un laberinto de esqueletos para llegar hasta <a href="#jefes" onclick="openBossModal('Molinete'); return false;">Molinete</a>.</p>`
  },
  {
    name: 'Tumba de los Gigantes',
    img: 'images/nito.png',
    walkthrough: `<p>Oscuridad total antes de enfrentarte a <a href="#jefes" onclick="openBossModal('Nito el Rey del Cementerio'); return false;">Nito</a>.</p>`
  },
  {
    name: 'Ruinas de Nuevo Londo',
    img: 'images/reyes.png',
    walkthrough: `<p>Ciudades anegadas donde moran los <a href="#jefes" onclick="openBossModal('Cuatro Reyes'); return false;">Cuatro Reyes</a>.</p>`
  },
  {
    name: 'Ruinas de los Demonios',
    img: 'images/incesante.png',
    walkthrough: `<p>Zona de lava donde aparece la <a href="#jefes" onclick="openBossModal('Descarga Incesante'); return false;">Descarga Incesante</a>.</p>`
  },
  {
    name: 'Ruinas de los Demonios Profundas',
    img: 'images/sabio.png',
    walkthrough: `<p>Más adelante se oculta el <a href="#jefes" onclick="openBossModal('Sabio del Fuego Demoníaco'); return false;">Sabio del Fuego Demoníaco</a>.</p>`
  },
  {
    name: 'Lago de la Lava',
    img: 'images/ciempies.png',
    walkthrough: `<p>Antes de llegar a Izalith deberás derrotar al <a href="#jefes" onclick="openBossModal('Demonio Ciempiés'); return false;">Demonio Ciempiés</a>.</p>`
  },
  {
    name: 'Izalith Perdida',
    img: 'images/bed.png',
    walkthrough: `<p>La cuna de los demonios donde reina el <a href="#jefes" onclick="openBossModal('Lecho del Caos'); return false;">Lecho del Caos</a>.</p>`
  },
  {
    name: 'Horno de la Primera Llama',
    img: 'images/gwyn.png',
    walkthrough: `<p>El final del camino te lleva ante <a href="#jefes" onclick="openBossModal('Gwyn, Señor de la Ceniza'); return false;">Gwyn</a>.</p>`
  },
  {
    name: 'Jardín del Santuario',
    img: 'images/santuario.png',
    walkthrough: `<p>Entrada al DLC custodiada por el <a href="#jefes" onclick="openBossModal('Guardián del Santuario'); return false;">Guardián del Santuario</a>.</p>`
  },
  {
    name: 'Bosque Real',
    img: 'images/artorias.png',
    walkthrough: `<p>Zona frondosa donde se libra la batalla contra el <a href="#jefes" onclick="openBossModal('Caballero Artorias'); return false;">Caballero Artorias</a>.</p>`
  },
  {
    name: 'Barranco del Dragón',
    img: 'images/Kalameet.png',
    walkthrough: `<p>Desde las alturas te ataca <a href="#jefes" onclick="openBossModal('Kalameet, el Dragón Negro'); return false;">Kalameet</a>.</p>`
  },
  {
    name: 'Sima del Abismo',
    img: 'images/manus.png',
    walkthrough: `<p>Descenso final para enfrentarse a <a href="#jefes" onclick="openBossModal('Manus, Padre del Abismo'); return false;">Manus</a>.</p>`
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

let currentAreaIndex = 0;
let areaTransitioning = false;


function openAreaModal(index, direction = 'next') {
  if (areaTransitioning) return;
  areaTransitioning = true;
  currentAreaIndex = index;

  const modal = document.getElementById('area-modal');
  const body = modal.querySelector('.area-modal-body');
  const existing = body.querySelector('.area-detail');
  const data = areaData[index];

  const newHTML = `
    <div class="area-detail">
      <h3 class="area-modal-title">${data.name}</h3>
      <img class="area-modal-img" src="${data.img}" alt="${data.name}">
      <div class="area-modal-walkthrough">${data.walkthrough}</div>
    </div>`;

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = newHTML;
  const newDetail = tempDiv.firstElementChild;

  if (!existing) {
    body.innerHTML = newHTML;
    const elem = body.querySelector('.area-detail');
    elem.classList.add('fade-in');
    elem.addEventListener('animationend', () => { areaTransitioning = false; }, { once: true });
  } else {
    body.appendChild(newDetail);
    void newDetail.offsetWidth;
    const exitClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
    const enterClass = direction === 'next' ? 'slide-in-right' : 'slide-in-left';
    existing.classList.add(exitClass);
    newDetail.classList.add(enterClass);
    newDetail.addEventListener('animationend', () => {
      existing.remove();
      areaTransitioning = false;
    }, { once: true });
  }

  modal.classList.remove('hidden');
}

function closeAreaModal() {
  document.getElementById('area-modal').classList.add('hidden');
}

function showPrevArea() {
  currentAreaIndex = (currentAreaIndex - 1 + areaData.length) % areaData.length;
  openAreaModal(currentAreaIndex, 'prev');
}

function showNextArea() {
  currentAreaIndex = (currentAreaIndex + 1) % areaData.length;
  openAreaModal(currentAreaIndex, 'next');
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