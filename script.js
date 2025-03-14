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

function filterSpells(spells) {
    const searchTerm = document.getElementById("spellSearch").value.toLowerCase();
    
    const selectedFilters = {
        castingTime: Array.from(document.querySelectorAll('input[data-filter="castingTime"]:checked')).map(input => input.value),
        duration: Array.from(document.querySelectorAll('input[data-filter="duration"]:checked')).map(input => input.value),
        concentration: Array.from(document.querySelectorAll('input[data-filter="concentration"]:checked')).map(input => input.value)
    };

    return spells.filter(spell => {
        const nameMatch = spell["Spell Name"].toLowerCase().startsWith(searchTerm);
        const castingTimeMatch = selectedFilters.castingTime.length === 0 || selectedFilters.castingTime.includes(spell["Casting Time"]);
        const durationMatch = selectedFilters.duration.length === 0 || selectedFilters.duration.includes(spell["Duration"]);
        const concentrationMatch = selectedFilters.concentration.length === 0 || selectedFilters.concentration.includes(spell["Requires Concentration?"]);

        return nameMatch && castingTimeMatch && durationMatch && concentrationMatch;
    });
}

function displaySpellList() {
    const level = document.getElementById("spellLevelList").value;
    const spellList = document.getElementById("spellList");
    spellList.innerHTML = '';

    const levelSpells = spellData.filter(spell => spell["Spell Level"] === level);
    const filteredSpells = filterSpells(levelSpells);

    filteredSpells.forEach(spell => {
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

function toggleFilterCategory(header) {
    const toggles = header.nextElementSibling;
    const arrow = header.querySelector('.toggle-arrow');
    toggles.classList.toggle('collapsed');
    arrow.classList.toggle('rotated');
}

document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for filter category headers
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', () => toggleFilterCategory(header));
    });
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
    const spellSearch = document.getElementById('spellSearch');
    const filterControls = document.querySelectorAll('.filter-toggles input[type="checkbox"]');

    spellLevelList.addEventListener('change', displaySpellList);
    spellSearch.addEventListener('input', displaySpellList);
    filterControls.forEach(control => {
        control.addEventListener('change', displaySpellList);
    });
});