let spellData = [];

// Fetch the spells data
fetch('attached_assets/spells.json')
    .then(response => response.json())
    .then(data => {
        spellData = data;
    })
    .catch(error => console.error('Error loading spells:', error));

function generateSpell() {
    const level = document.getElementById("spellLevel").value;

    // Filter spells by the selected level
    const spellList = spellData.filter(spell => spell["Spell Level"] === level);

    if (!spellList || spellList.length === 0) {
        console.error("No spells found for level: " + level);
        return;
    }

    // Select a random spell
    const randomIndex = Math.floor(Math.random() * spellList.length);
    const randomSpell = spellList[randomIndex];

    // Update the display
    document.getElementById("spellName").textContent = randomSpell["Spell Name"] || "Unknown";
    document.getElementById("spellComponents").textContent = randomSpell["Components"] || "None";
    document.getElementById("spellCastingTime").textContent = randomSpell["Casting Time"] || "Unknown";
    document.getElementById("spellDuration").textContent = randomSpell["Duration"] || "Unknown";
    document.getElementById("spellConcentration").textContent = randomSpell["Requires Concentration?"] || "No";
    document.getElementById("spellRange").textContent = randomSpell["Range"] || "None";
    const description = randomSpell["Description"] || "No description available.";
    const formattedDescription = description.split('\n\n').map(paragraph => 
        `<p>${paragraph.trim()}</p>`
    ).join('');
    document.getElementById("spellDescription").innerHTML = formattedDescription;

    // Make the spell output visible
    const spellOutput = document.getElementById("spellOutput");
    spellOutput.classList.add("visible");
}

function displaySpellList() {
    const level = document.getElementById("spellLevelList").value;
    const spellList = document.getElementById("spellList");
    spellList.innerHTML = '';

    const levelSpells = spellData.filter(spell => spell["Spell Level"] === level);

    levelSpells.forEach(spell => {
        const spellCard = document.createElement('div');
        spellCard.className = 'spell-card';
        
        const description = spell["Description"] || "No description available.";
        const formattedDescription = description.split('\n\n').map(paragraph => 
            `<p>${paragraph.trim()}</p>`
        ).join('');

        spellCard.innerHTML = `
            <h2>${spell["Spell Name"] || "Unknown"}</h2>
            <div class="spell-metadata">
                <p><strong>Components:</strong> ${spell["Components"] || "None"}</p>
                <p><strong>Casting Time:</strong> ${spell["Casting Time"] || "Unknown"}</p>
                <p><strong>Duration:</strong> ${spell["Duration"] || "Unknown"}</p>
                <p><strong>Concentration:</strong> ${spell["Requires Concentration?"] || "No"}</p>
                <p><strong>Range:</strong> ${spell["Range"] || "None"}</p>
            </div>
            <div class="spell-description">
                <h3>Description</h3>
                ${formattedDescription}
            </div>
        `;
        
        spellList.appendChild(spellCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Spinner page button
    const button = document.querySelector('.button');
    if (button) {
        button.addEventListener('click', generateSpell);
    }

    // Navigation
    const spinnerPageBtn = document.getElementById('spinnerPageBtn');
    const listPageBtn = document.getElementById('listPageBtn');
    const spinnerPage = document.getElementById('spinnerPage');
    const listPage = document.getElementById('listPage');

    spinnerPageBtn.addEventListener('click', () => {
        spinnerPage.classList.add('active');
        listPage.classList.remove('active');
        spinnerPageBtn.classList.add('active');
        listPageBtn.classList.remove('active');
    });

    listPageBtn.addEventListener('click', () => {
        listPage.classList.add('active');
        spinnerPage.classList.remove('active');
        listPageBtn.classList.add('active');
        spinnerPageBtn.classList.remove('active');
    });

    // Spell list functionality
    const spellLevelList = document.getElementById('spellLevelList');
    spellLevelList.addEventListener('change', displaySpellList);
});