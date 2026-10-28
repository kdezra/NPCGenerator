const selectOptions = {
    "role":[
        "Commoner",
        "Merchant",
        "Merchant"
        "Merchant - Powerful",
        ""
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
        "Pathfinder/D&D: Any"
        "Pathfinder/D&D: Human",
        "Pathfinder/D&D: Demonic",
        "Pathfinder/D&D: Draconic",
        "Pathfinder/D&D: Elvish",
        "Pathfinder/D&D: Dwarvish",
        "Pathfinder/D&D: Orcish",
        "Pathfinder/D&D: Gnomish",
        "Pathfinder/D&D: Halfling",
        "Pathfinder/D&D: Drow",
        "sep",
        "Blades in the Dark: Any"
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

function generateName(details) {
    console.log(`${details.role} (${details.flavor}) Name`)
}

function generateAge(details) {
    console.log(`${details.role} (${details.flavor}) Age`)
}

function getFirstCheckedVal(parentId, defaultValue=undefined) {
    return(document.querySelector(`fieldset#${parentId} input:checked`)?.value??defaultValue)
}

function getCheckedVals(parentId) {
    return([...document.querySelectorAll(`fieldset#${parentId} input:checked`)].map((e)=>e.value))
}

function generateNPC(event) {
    const roleVal = document.getElementById("_ROLE_SELECT").value;
    const flavorVal = document.getElementById("_FLAVOR_SELECT").value;
    const genderVal = getFirstCheckedVal("_GENDER_SET", "a");
    const importanceVal = getFirstCheckedVal("_IMPORTANCE_SET", "0");
    const optVals = getCheckedVals("_OPTS_SET");
    
    const formOptions = {
        role: roleVal,
        flavor: flavorVal,
        gender: genderVal,
        importance: importanceVal,
        opts: optVals
    }

    console.log(formOptions)

    generateName(formOptions)
}

document.addEventListener("DOMContentLoaded", event => {
    populateSelect("role");
    populateSelect("flavor");
    document.getElementById("_NPCGEN_FORM").addEventListener("click", generateNPC);
})