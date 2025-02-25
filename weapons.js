const contentMappingWeapons = {
  armas: `
    <h1>Armas</h1>
    <section class="weapons-group">
      <h2>Dagas</h2>
      <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
      <div class="cards-container">
        <div class="card">
          <img src="images/daga.png" alt="Daga">
          <div class="card-overlay"></div>
          <div class="card-info">
            <h3>Daga</h3>
          </div>
        </div>
        <div class="card">
          <img src="images/daga_paradas.png" alt="Daga de Paradas">
          <div class="card-overlay"></div>
          <div class="card-info">
            <h3>Daga de Paradas</h3>
          </div>
        </div>
        <div class="card">
          <img src="images/daga_priscilla.png" alt="Daga de Priscilla">
          <div class="card-overlay"></div>
          <div class="card-info">
            <h3>Daga de Priscilla</h3>
          </div>
        </div>
        <div class="card">
          <img src="images/daga_bandido.png" alt="Daga de Bandido">
          <div class="card-overlay"></div>
          <div class="card-info">
            <h3>Daga de Bandido</h3>
          </div>
        </div>
      </div>
    </section>
    <section class="weapons-group">
      <h2>Espadas</h2>
      <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
      <div class="cards-container">
        <div class="card">
          <img src="images/espada_larga.png" alt="Espada Larga">
          <div class="card-overlay"></div>
          <div class="card-info">
            <h3>Espada Larga</h3>
          </div>
        </div>
      </div>
    </section>
    <section class="weapons-group">
      <h2>Hachas</h2>
      <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
      <div class="cards-container">
        <div class="card">
          <img src="images/hacha_guerra.png" alt="Hacha de Guerra">
          <div class="card-overlay"></div>
          <div class="card-info">
            <h3>Hacha de Guerra</h3>
          </div>
        </div>
      </div>
    </section>
  `
};

const weaponDetails = {
  "Daga": {
    description: `
      <p class="weapon-intro">
        La <strong>Daga</strong> es un arma de Dark Souls con ataques veloces,
        ideal para críticos tras un parry o backstab.
      </p>
      <blockquote>
        “Esta pequeña daga estándar apenas tiene un daño modesto,
        pero puede atacar en rápida sucesión y es efectiva en golpes críticos.”
      </blockquote>
      <blockquote>
        “Con ataques de tajo y estocada, esta daga es útil en diversas situaciones.”
      </blockquote>
    `,
    howToGet: `
      <ul>
        <li>Equipo inicial para la clase <strong>Hechicero</strong>.</li>
        <li>Comprada al <strong>Mercader No Muerto (varón)</strong> por 300 almas.</li>
        <li>Ubicación en vídeo (timestamp 1:11).</li>
      </ul>
    `,
    hintsAndTips: `
      <ul>
        <li>Puede ser ofrecida a <strong>Kingseeker Frampt</strong> por 50 almas.</li>
        <li>La <strong>Daga de Bandido</strong> posee más alcance y sangrado, pero la básica es más veloz.</li>
        <li>Muy buena para builds de Destreza orientadas a backstabs y ripostes.</li>
      </ul>
    `,
    upgradeTable: `
      <table class="upgrade-table">
        <thead>
          <tr>
            <th>Nivel</th>
            <th>Daño Físico</th>
            <th>Daño Mágico</th>
            <th>Escalado</th>
            <th>Estabilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Regular +0</td>
            <td>56</td>
            <td>-</td>
            <td>E (Destreza)</td>
            <td>26</td>
          </tr>
          <tr>
            <td>Regular +5</td>
            <td>84</td>
            <td>-</td>
            <td>E/B</td>
            <td>26</td>
          </tr>
          <tr>
            <td>Regular +10</td>
            <td>112</td>
            <td>-</td>
            <td>E/B</td>
            <td>26</td>
          </tr>
          <tr>
            <td>Regular +15</td>
            <td>140</td>
            <td>-</td>
            <td>E/A</td>
            <td>26</td>
          </tr>
          <tr>
            <td>Lightning +5</td>
            <td>140</td>
            <td>140</td>
            <td>-</td>
            <td>26</td>
          </tr>
        </tbody>
      </table>
    `,
    extraInfo: `
      <p>
        <strong>Tipo de Arma:</strong> Daga<br>
        <strong>Tipo de Ataque:</strong> Slash / Thrust<br>
        <strong>Mejorable con Encantamientos:</strong> Sí<br>
        <strong>Especial:</strong> No
      </p>
      <p>
        Infundida con Magia: ~105 daño físico / 115 daño mágico.<br>
        Infundida con Fuego: ~134 daño físico / 134 de fuego.<br>
        Infundida con Rayo: ~140 daño físico / 140 de rayo.
      </p>
    `
  },
  "Daga de Paradas": {
    description: "Diseñada para contrarrestar ataques con parry, muy ligera...",
    howToGet: "<p>Hallada en la zona X. Comprable en PNJ Y por 400 almas.</p>",
    hintsAndTips: "<ul><li>Excelentes parries</li></ul>",
    upgradeTable: "<p>Sin tabla extensa de ejemplo.</p>",
    extraInfo: "<p>Daño base: 45. Escalado: D en Destreza.</p>"
  },
  "Daga de Priscilla": {
    description: "Forjada a partir de la cola de Priscilla, la Mestiza...",
    howToGet: "<p>Corta la cola de Priscilla en el Mundo Pintado de Ariamis</p>",
    hintsAndTips: "<ul><li>Causa sangrado muy efectivo</li></ul>",
    upgradeTable: "<p>No se puede infundir en fuego/relámpago.</p>"
  },
  "Daga de Bandido": {
    description: "Daga sucia y tosca, con algo más de alcance y sangrado...",
    howToGet: "<p>Drop de ciertos ladrones en la Ciudad Infestada.</p>",
    hintsAndTips: "<ul><li>Mayor sangrado que la Daga estándar</li></ul>"
  },
  "Espada Larga": {
    description: "Una espada balanceada, ideal para principiantes...",
    howToGet: "<p>Equipo inicial del Caballero; comprable en X NPC.</p>",
    hintsAndTips: "<p>Buen escalado en Fuerza D.</p>",
    upgradeTable: "<p>Hasta +15, +5 relámpago...</p>"
  },
  "Hacha de Guerra": {
    description: "Un hacha pesada, gran daño de impacto...",
    howToGet: "<p>Comprada en X, drop del Enemigo Y.</p>",
    hintsAndTips: "<p>Ideal para builds de Fuerza; escalado C.</p>",
    upgradeTable: "<p>+15, Crystal +5, etc.</p>"
  }
};

document.addEventListener("DOMContentLoaded", function() {
  function loadWeaponsContent() {
    const contentArea = document.getElementById("content-area");
    contentArea.innerHTML = contentMappingWeapons.armas;
    addWeaponCardListeners();
  }

  function addWeaponCardListeners() {
    const cards = document.querySelectorAll(".weapons-group .card");
    cards.forEach(card => {
      card.addEventListener("click", function() {
        const weaponName = this.querySelector("h3").innerText;
        openWeaponModal(weaponName);
      });
    });
  }

  const armasLink = document.querySelector('a[data-section="armas"]');
  if (armasLink) {
    armasLink.addEventListener("click", function(event) {
      event.preventDefault();
      loadWeaponsContent();
    });
  }

  window.addWeaponCardListeners = addWeaponCardListeners;
});

function openWeaponModal(weaponName) {
  const modal = document.getElementById("boss-modal");
  const bossDetailsContainer = document.getElementById("boss-details");
  const details = weaponDetails[weaponName] || {};

  bossDetailsContainer.innerHTML = details.description
    ? `
      <div class="weapon-detail">
        <h2 style="text-align:center">${weaponName}</h2>
        <section class="weapon-description">${details.description}</section>
        <h3>How to Get / Where to Find ${weaponName}</h3>
        <section class="weapon-location">${details.howToGet || "<p>No se especifica método de obtención.</p>"}</section>
        <h3>Hints and Tips</h3>
        <section class="weapon-tips">${details.hintsAndTips || "<p>Sin consejos adicionales.</p>"}</section>
        <h3>${weaponName} Upgrade Table</h3>
        <section class="weapon-upgrades">${details.upgradeTable || "<p>Sin tabla de mejoras.</p>"}</section>
        <section class="weapon-extra">${details.extraInfo || ""}</section>
      </div>
    `
    : `<p>No hay información para ${weaponName}.</p>`;

  modal.classList.add("active");
}

if (typeof window.contentMappingHTML !== 'undefined') {
  Object.assign(window.contentMappingHTML, contentMappingWeapons);
} else {
  console.error("contentMappingHTML no está definido.");
}