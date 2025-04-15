const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const residuos = [
  {
    emoji: "🟢",
    titulo: "Resíduos Sólidos Urbanos",
    descricao: "Lixo doméstico como restos de comida, papéis e embalagens. Coletados pelas prefeituras."
  },
  {
    emoji: "♻️",
    titulo: "Resíduos Recicláveis",
    descricao: "Materiais que podem ser reaproveitados, como papel, plástico, vidro e metal."
  },
  {
    emoji: "🌿",
    titulo: "Resíduos Orgânicos",
    descricao: "Restos de alimentos, folhas e resíduos de jardim. Podem ser usados na compostagem."
  },
  {
    emoji: "⚠️",
    titulo: "Resíduos Perigosos",
    descricao: "Pilhas, baterias, medicamentos vencidos, lâmpadas. Devem ser descartados com cuidado."
  },
  {
    emoji: "🏥",
    titulo: "Resíduos de Saúde",
    descricao: "Materiais hospitalares contaminados, como seringas, luvas e gazes. Coleta especial obrigatória."
  },
  {
    emoji: "🧱",
    titulo: "Resíduos da Construção",
    descricao: "Entulho de obras: concreto, tijolos, telhas. Podem ser reutilizados em outras construções."
  },
  {
    emoji: "🧼",
    titulo: "Resíduos Industriais",
    descricao: "Subprodutos de fábricas e indústrias. Devem seguir normas específicas de descarte."
  },
  {
    emoji: "💻",
    titulo: "Resíduos Eletroeletrônicos",
    descricao: "Celulares, TVs, computadores quebrados. Contêm metais pesados e devem ser reciclados corretamente."
  }
];

const container = document.getElementById('cardContainer');

residuos.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="emoji">${item.emoji}</div>
    <div class="title">${item.titulo}</div>
    <div class="description">${item.descricao}</div>
  `;
  container.appendChild(card);
});