const selectOptions = {
    "role":[
        "Commoner",
        "Powerful",
        // TODO: more generic roles
        "sep",
        "Rogue",
        "Rogue - Thief",
        "Rogue - Assassin",
        "Rogue - Smuggler",
        "Rogue - Bandit",
        "Rogue - Swashbuckler",
        "Rogue - Trickster",
        "sep",
        "Martial",
        "Martial - Brute",
        "Martial - Soldier",
        "Martial - Finesse",
        "Martial - Archery",
        "sep",
        "Spellcaster",
        "Spellcaster - Arcane",
        "Spellcaster - Divine",
        "Spellcaster - Nature",
        "Spellcaster - Demonic",
        "Spellcaster - Sorcery",
        "Spellcaster - Eldritch",
        "sep",
        "Spellsword",
        "Spellsword - Arcane",
        "Spellsword - Divine",
        "Spellsword - Demonic",
        "Spellsword - Eldritch"
    ],
    "flavor":[
        "Generic",
        "sep",
        "Pathfinder/D&D: Demonic",
        "Pathfinder/D&D: Draconic",
        "Pathfinder/D&D: Elvish",
        "Pathfinder/D&D: Dwarvish",
        "Pathfinder/D&D: Orcish",
        "sep",
        "Blades in the Dark: Human",
        "Blades in the Dark: Demon"
        // TODO: Add more flavors
    ]
};

const checkboxOptions = {
    "opts": {
        vibes: "Generate Vibes",
        plothook: "Include Plothook"
    }
};

const docElem = {}

function populateSelect(name, addDefault = true) {
    var id = `_${String(name).toUpperCase()}_SELECT`
    var options = selectOptions[String(name).toLowerCase()]

    const select = document.getElementById(id);
    select.innerHTML = ""; /* clear all children */

    if (addDefault) {
        const defaultElem = document.createElement("option");
        defaultElem.value = "Any"
        defaultElem.textContent = "Any"
        defaultElem.selected = true;
        select.appendChild(defaultElem);
        select.appendChild(document.createElement("hr"));
    }
    options.forEach(option => {
        if (option == "sep") {
            select.appendChild(document.createElement("hr"));
        } else {
            const element = document.createElement("option");
            element.value = option;
            element.textContent = option;
            select.appendChild(element);
        }
    });
}

function populateCheckboxes(name) {
    var id = `_${String(name).toUpperCase()}_CHECKS`
    var options = checkboxOptions[String(name).toLowerCase()]

    const container = document.getElementById(id);

    Object.entries(options).forEach(([value, label]) => {
        const element = document.createElement("input");
        element.type = "checkbox";
        element.value = value;
        element.id = `${id}_INPUT`;

        const text = document.createElement("label");
        text.htmlFor = element.id;
        text.textContent = label;

        const wrapper = document.createElement("label");
        wrapper.append(element, text);

        container.appendChild(wrapper);
    });
}

function generateNPC() {
    console.log("Generate")
}

document.addEventListener("DOMContentLoaded", event => {
    populateSelect("role");
    populateSelect("flavor", addDefault=false);
    populateCheckboxes("opts");

    document.getElementById("_NPCGEN_FORM").addEventListener("submit", event => {
        event.preventDefault();
        generateNPC();
    });
})