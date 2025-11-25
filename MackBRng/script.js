let names = [];
let previous = [];

async function loadNames() {
    const response = await fetch('./data/names.json');
    const data = await response.json();
    names = data.people;
}

function generateName() {
    if (names.length === 0) return;

    const random = names[Math.floor(Math.random() * names.length)].name;

    document.getElementById("currentName").textContent = random;

    previous.unshift(random);

    if (previous.length > 5) previous.pop();

    updatePreviousList();
}

function updatePreviousList() {
    const list = document.getElementById("previousList");
    list.innerHTML = "";

    previous.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
    });
}

document.getElementById("generateBtn").addEventListener("click", generateName);

loadNames();
