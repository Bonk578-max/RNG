let names = [];
let previous = [];

async function loadNames() {
    const response = await fetch('./data/names.json');
    const data = await response.json();
    names = data.people;
}

function generateName() {
    if (names.length === 0) return;

    const person = names[Math.floor(Math.random() * names.length)];

    const fullName = person.name;
    const email = person.personal || person.codestack;

    document.getElementById("currentName").textContent = fullName;
    document.getElementById("currentEmail").textContent = email;

    previous.unshift(`${fullName} — ${email}`);

    if (previous.length > 5) previous.pop();

    updatePreviousList();
}

function updatePreviousList() {
    const list = document.getElementById("previousList");
    list.innerHTML = "";

    previous.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = entry;
        list.appendChild(li);
    });
}

document.getElementById("generateBtn").addEventListener("click", generateName);

loadNames();