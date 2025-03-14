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

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', generateSpell);
    } else {
        console.error("Generate button not found.");
    }
});