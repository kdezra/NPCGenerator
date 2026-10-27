const selectOptions = {
    "role":[
        "role1",
        "role2",
        "sep",
        "role3",
        "role4"
    ],
    "flavor":[
        "flavor1",
        "flavor2",
        "flavor3",
        "sep",
        "flavor4"
    ]
};

const checkboxOptions = {
    "opts": {
        c1: "Option 1",
        c2: "Option 2",
        c3: "Option 3",
        c4: "Option 4"
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
    populateSelect("flavor");
    populateCheckboxes("opts");

    document.getElementById("_NPCGEN_FORM").addEventListener("submit", event => {
        event.preventDefault();
        generateNPC();
    });
})