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
      <p>La <strong>Daga</strong> es un arma de Dark Souls con ataques veloces, ideal para críticos tras un parry o backstab.</p>
      <blockquote>
        “Esta pequeña daga estándar apenas tiene un daño modesto, pero puede atacar en rápida sucesión y es efectiva en golpes críticos.”
      </blockquote>
      <blockquote>
        “Con ataques de tajo y estocada, esta daga es útil en diversas situaciones.”
      </blockquote>
    `,
    howToGet: `
      <ul>
        <li>Equipo inicial para la clase <strong>Hechicero</strong>.</li>
        <li>Comprada al <strong>Mercader No Muerto (varón)</strong> por 300 almas.</li>
      </ul>
    `,
    hintsAndTips: `
      <ul>
        <li>Puede ofrecerse a Frampt para 50 almas.</li>
        <li>La <strong>Daga de Bandido</strong> posee más alcance y sangrado, pero la Daga básica es más veloz.</li>
        <li>Excelente opción para builds de Destreza.</li>
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
    `,
    infusions: {
      magic: {
        name: "Magic",
        cost: 2000,
        blacksmith: "Rickert de Vinheim",
        damageExample: "105 físico / 115 mágico",
        requirements: "Ascua Mágica",
        notes: "Escala con Inteligencia y aumenta el daño mágico."
      },
      enchanted: {
        name: "Enchanted",
        cost: 3000,
        blacksmith: "Rickert de Vinheim",
        damageExample: "84 físico / 90 mágico",
        requirements: "Ascua Encantada",
        notes: "Aumenta aún más el escalado en Inteligencia que Magic."
      },
      divine: {
        name: "Divine",
        cost: 2000,
        blacksmith: "Andre de Astora",
        damageExample: "57 físico / 69 mágico",
        requirements: "Ascua Divina",
        notes: "Muy eficaz contra enemigos que se reaniman, al romper su nexo con la necromancia."
      },
      fire: {
        name: "Fire",
        cost: 2000,
        blacksmith: "Vamos",
        damageExample: "134 daño físico / 134 de fuego",
        requirements: "Ascua de Fuego",
        notes: "Escala poco, pero brinda daño elemental de fuego."
      }
      // Agrega más si deseas (Lightning, Chaos, etc.)
    }
  },

  "Daga de Paradas": {
    description: "Daga especializada en parries, con un diseño ligero y corto alcance...",
    howToGet: "<p>Hallada en X zona, o comprable en Y PNJ por 400 almas.</p>",
    hintsAndTips: "<ul><li>Excelente para personajes con alta destreza en parries.</li></ul>",
    upgradeTable: "<p>Soporta hasta +15 y encantamientos básicos.</p>",
    extraInfo: "<p>Daño base: 45</p>"
  },

  "Daga de Priscilla": {
    description: "Forjada a partir de la cola de Priscilla, la Mestiza. Causa sangrado muy eficaz.",
    howToGet: "<p>Corta la cola de Priscilla en el Mundo Pintado de Ariamis.</p>",
    hintsAndTips: "<ul><li>Inflige sangrado a gran velocidad.</li></ul>",
    upgradeTable: "<p>No se infunde con fuego/relámpago.</p>"
  },

  "Daga de Bandido": {
    description: "Daga tosca con algo más de alcance y sangrado que la daga estándar...",
    howToGet: "<p>Drop de ladrones en la Ciudad Infestada.</p>",
    hintsAndTips: "<ul><li>Sangrado mayor que la Daga estándar.</li></ul>"
  },

  "Espada Larga": {
    description: "Equilibrada y versátil, ideal para principiantes...",
    howToGet: "<p>Equipo inicial del Caballero, comprable en X PNJ.</p>",
    hintsAndTips: "<p>Buen escalado en Fuerza D.</p>",
    upgradeTable: "<p>Puede llegar a +15 o Lightning +5.</p>"
  },

  "Hacha de Guerra": {
    description: "Hacha pesada con gran daño de impacto, escala en Fuerza C.",
    howToGet: "<p>Comprable en X PNJ, drop del Enemigo Y.</p>",
    hintsAndTips: "<p>Recomendada para builds de Fuerza.</p>",
    upgradeTable: "<p>Hasta +15, Crystal +5, etc.</p>"
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
        const weaponName = card.querySelector("h3").innerText;
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

        <section>${details.description || ""}</section>

        <h3>How to Get / Where to Find ${weaponName}</h3>
        <section>${details.howToGet || ""}</section>

        <h3>Hints and Tips</h3>
        <section>${details.hintsAndTips || ""}</section>

        <h3>${weaponName} Upgrade Table</h3>
        <section>${details.upgradeTable || ""}</section>

        <section>${details.extraInfo || ""}</section>

        ${
          details.infusions
            ? `
              <h3>Encantamientos / Infusiones</h3>
              <p>Haz clic en un encantamiento para más detalles.</p>
              <div class="infusions-container">
                ${Object.keys(details.infusions).map(key => {
                  const inf = details.infusions[key];
                  return `<button class="infusion-btn" data-infusion="${key}">${inf.name}</button>`;
                }).join("")}
              </div>
              <div id="infusion-details" style="margin-top:10px; border:1px solid #d4af37; padding:10px;"></div>
            `
            : `<p>Sin encantamientos disponibles para esta arma.</p>`
        }
      </div>
    `
    : `<p>No hay información para ${weaponName}.</p>`;

  modal.classList.add("active");

  if (details.infusions) {
    const infusionBtns = bossDetailsContainer.querySelectorAll(".infusion-btn");
    infusionBtns.forEach(btn => {
      btn.addEventListener("click", function() {
        const infusionKey = btn.getAttribute("data-infusion");
        showInfusionDetails(infusionKey, details.infusions);
      });
    });
  }
}

function showInfusionDetails(infusionKey, infusions) {
  const infusion = infusions[infusionKey];
  if (!infusion) return;
  const infusionDiv = document.getElementById("infusion-details");
  infusionDiv.innerHTML = `
    <div class="infusion-detail-box">
      <h4>${infusion.name} Infusion</h4>
      <p><strong>Coste:</strong> ${infusion.cost} almas</p>
      <p><strong>Herrero:</strong> ${infusion.blacksmith}</p>
      <p><strong>Daño Aproximado:</strong> ${infusion.damageExample}</p>
      <p><strong>Requisitos:</strong> ${infusion.requirements}</p>
      <p><strong>Notas:</strong> ${infusion.notes}</p>
    </div>
  `;
}

if (typeof window.contentMappingHTML !== 'undefined') {
  Object.assign(window.contentMappingHTML, contentMappingWeapons);
} else {
  console.error("contentMappingHTML no está definido.");
}