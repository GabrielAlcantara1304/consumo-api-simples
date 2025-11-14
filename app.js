const API_URL = "https://rickandmortyapi.com/api/character";
const cards = document.getElementById("cards");
const feedback = document.getElementById("feedback");

function createCard(person) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = person.image;
  img.alt = person.name;

  const name = document.createElement("h3");
  name.textContent = person.name;

  const status = document.createElement("p");
  status.textContent = "Status: " + person.status;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(status);

  return card;
}

async function loadCharacters() {
  feedback.textContent = "Carregando...";
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    feedback.textContent = "";

    data.results.forEach((p) => {
      const el = createCard(p);
      cards.appendChild(el);
    });
  } catch (e) {
    feedback.textContent = "Erro ao carregar dados.";
  }
}

loadCharacters();
