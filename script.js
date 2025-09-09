const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// Tipos de Lixeiras e suas Descrições //

const lixeiras = [
  {
    emoji: "🔵",
    titulo: "Azul - Papel",
    descricao: "Papéis, jornais, revistas, caixas de papelão.",
    cor: "#2196f3",
  },
  {
    emoji: "🟡",
    titulo: "Amarela - Metal",
    descricao: "Latas de alumínio, tampas, grampos, fios de cobre.",
    cor: "#fbc02d",
  },
  {
    emoji: "🟢",
    titulo: "Verde - Vidro",
    descricao: "Garrafas, frascos, potes de vidro. Evite vidros quebrados.",
    cor: "#43a047",
  },
  {
    emoji: "🔴",
    titulo: "Vermelha - Plástico",
    descricao: "Garrafas PET, potes, sacolas plásticas e brinquedos.",
    cor: "#e53935",
  },
  {
    emoji: "⚪",
    titulo: "Branca - Resíduos de Saúde",
    descricao: "Resíduos hospitalares e contaminantes. Uso profissional.",
    cor: "#cfd8dc",
  },
  {
    emoji: "🟤",
    titulo: "Marrom - Orgânico",
    descricao: "Restos de alimentos, folhas e resíduos de jardim.",
    cor: "#8d6e63",
  },
  {
    emoji: "⚫",
    titulo: "Preta - Rejeitos",
    descricao: "Materiais não recicláveis, como papel higiênico e fraldas.",
    cor: "#424242",
  },
  {
    emoji: "🟣",
    titulo: "Roxa - Radioativos",
    descricao: "Material radioativo, usado em hospitais e laboratórios.",
    cor: "#9c27b0",
  },
  {
    emoji: "🟠",
    titulo: "Laranja - Perigosos",
    descricao: "Pilhas, baterias, produtos químicos, tóxicos ou inflamáveis.",
    cor: "#ff9800",
  },
];

const containe = document.getElementById("trashContainer");

lixeiras.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("trash-card");
  card.style.borderTopColor = item.cor;

  card.innerHTML = `
    <div class="trash-emoji">${item.emoji}</div>
    <div class="trash-title">${item.titulo}</div>
    <div class="trash-description">${item.descricao}</div>
  `;

  containe.appendChild(card);
});

// Tipos de Resíduos e suas Descrições //

const residuos = [
  {
    emoji: "🟢",
    titulo: "Resíduos Sólidos Urbanos",
    descricao:
      "Lixo doméstico como restos de comida, papéis e embalagens. Coletados pelas prefeituras.",
  },
  {
    emoji: "♻️",
    titulo: "Resíduos Recicláveis",
    descricao:
      "Materiais que podem ser reaproveitados, como papel, plástico, vidro e metal.",
  },
  {
    emoji: "🌿",
    titulo: "Resíduos Orgânicos",
    descricao:
      "Restos de alimentos, folhas e resíduos de jardim. Podem ser usados na compostagem.",
  },
  {
    emoji: "⚠️",
    titulo: "Resíduos Perigosos",
    descricao:
      "Pilhas, baterias, medicamentos vencidos, lâmpadas. Devem ser descartados com cuidado.",
  },
  {
    emoji: "🏥",
    titulo: "Resíduos de Saúde",
    descricao:
      "Materiais hospitalares contaminados, como seringas, luvas e gazes. Coleta especial obrigatória.",
  },
  {
    emoji: "🧱",
    titulo: "Resíduos da Construção",
    descricao:
      "Entulho de obras: concreto, tijolos, telhas. Podem ser reutilizados em outras construções.",
  },
  {
    emoji: "🧼",
    titulo: "Resíduos Industriais",
    descricao:
      "Subprodutos de fábricas e indústrias. Devem seguir normas específicas de descarte.",
  },
  {
    emoji: "💻",
    titulo: "Resíduos Eletroeletrônicos",
    descricao:
      "Celulares, TVs, computadores quebrados. Contêm metais pesados e devem ser reciclados corretamente.",
  },
];

const container = document.getElementById("cardContainer");

residuos.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="emoji">${item.emoji}</div>
    <div class="title">${item.titulo}</div>
    <div class="description">${item.descricao}</div>
  `;
  container.appendChild(card);
});

// Mapa de Locais de Coleta //

const map = L.map("map").setView([-23.4427, -46.7952], 13); // São Paulo como exemplo

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
}).addTo(map);

const locaisDeColeta = [
  {
    nome: "Ecoponto: Recanto dos Humildes",
    tipo: "Entulhos, Árvores, móveis, fios e cabos",
    endereco: "Rua Sales Gomes, nº 415 – Bairro: Vila Perus",
    cep: "05211-200",
    funcionamento:
      "Segunda a sábado das 6h às 22h. Domingos e feriados das 6h às 18h.",
    coords: [-23.408955, -46.750728],
  },
  {
    nome: "Ecoponto: Jardim Santa Fé",
    tipo: "Eletronicos, entulhos, móveis e outros",
    endereco: "Rua Salvador Albano nº156 – Jardim Santa Fé (Zona Oeste)",
    cep: "05271-090",
    funcionamento:
      "Segunda a sábado das 6h às 22h. Domingos e feriados das 6h às 18h.",
    coords: [-23.431612, -46.791833],
  },
  {
    nome: "Drogasil Jardim Santa Fé",
    tipo: "Remédios vencidos e na validade",
    endereco: "Rua Leopoldo de Passos Lima, 101-Jardim Santa Fé (Zona Oeste)",
    cep: "05271-000",
    funcionamento: "Segunda a domingo das 7h às 23h.",
    telefone: "(11) 973610728",
    coords: [-23.430628, -46.788364],
  },
];

locaisDeColeta.forEach((local) => {
  L.marker(local.coords).addTo(map).bindPopup(`
          <div class="popup-title">${local.nome}</div>
          <div><strong>Tipo:</strong> ${local.tipo}</div>
          <div><strong>Endereço:</strong> ${local.endereco}</div>
          <div><strong>CEP:</strong> ${local.cep}</div>
          ${
            local.funcionamento
              ? `<div><strong>Funcionamento:</strong> ${local.funcionamento}</div>`
              : ""
          }
          ${
            local.telefone
              ? `<div><strong>Telefone:</strong> ${local.telefone}</div>`
              : ""
          }
        `);
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const questions = [
  {
    question: "Qual a cor da lixeira para papel?",
    answers: [
      { text: "Azul", correct: true },
      { text: "Amarela", correct: false },
      { text: "Verde", correct: false },
      { text: "Vermelha", correct: false },
    ],
  },
  {
    question: "Qual hábito economiza mais água?",
    answers: [
      { text: "Tomar banhos curtos", correct: true },
      { text: "Deixar a torneira aberta", correct: false },
      { text: "Lavar calçada com mangueira", correct: false },
      { text: "Encher piscina todo mês", correct: false },
    ],
  },
  {
    question: "Qual dessas energias é renovável?",
    answers: [
      { text: "Solar", correct: true },
      { text: "Carvão mineral", correct: false },
      { text: "Petróleo", correct: false },
      { text: "Nuclear", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const feedbackElement = document.getElementById("feedback");
const historyElement = document.getElementById("history");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  showQuestion();
  showHistory();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn-quiz");
    button.addEventListener("click", () => selectAnswer(button, answer));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  feedbackElement.innerHTML = "";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(button, answer) {
  // 🔹 Bloquear todos os botões após escolha
  Array.from(answerButtons.children).forEach((btn) => {
    btn.disabled = true;
  });

  if (answer.correct) {
    score++;
    button.classList.add("correct");
    feedbackElement.style.color = "green";
    feedbackElement.innerHTML = "✅ Correto! Muito bem!";
  } else {
    button.classList.add("wrong");
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML = "❌ Errado! Essa não é a resposta correta.";
  }

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas! 🌱`;
  nextButton.innerHTML = "Jogar novamente";
  nextButton.style.display = "block";

  // 🔹 Salvar histórico no navegador
  saveScore(score);
  showHistory();
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }
});
startQuiz();
