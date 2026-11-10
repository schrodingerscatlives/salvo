// ARRAY DE CARTAS CONFIGURÁVEL
const cartas = [
  { id: 1, t: "Registrar tudo: horários, prints, quem fez o quê", aceita: ["media", "alta"] },
  { id: 2, t: "Apagar os registros do sistema para “limpar” o ataque", aceita: ["descartar"] },
  { id: 3, t: "Desconectar o painel da internet e cortar o acesso remoto do fornecedor", aceita: ["alta"] },
  { id: 4, t: "Avisar a FrioTech, a diretoria e o jurídico (que avalia notificar autoridades e, se houver dados pessoais, a ANPD)", aceita: ["media"] },
  { id: 5, t: "Postar nas redes da empresa que “está tudo sob controle” antes de saber o que houve", aceita: ["descartar"] },
  { id: 6, t: "Acionar o plantão de TI e o time de crise", aceita: ["alta"] },
  { id: 7, t: "Descartar com segurança a mercadoria fora da temperatura, trocar as senhas e reunir as lições aprendidas", aceita: ["media"] },
  { id: 8, t: "Investigar até descobrir exatamente quem clicou no e-mail, para responsabilizar a pessoa", aceita: ["descartar"] },
  { id: 9, t: "Passar as geladeiras para o controle manual na loja", aceita: ["alta", "media"] }
];

// DICAS DISPONÍVEIS
let currentTipIndex = 0;
const tips = [
  "No minuto zero de um ataque, sua prioridade absoluta é conter a hemorragia e garantir a continuidade do negócio. Pergunte-se: 'Se eu não fizer isso nos próximos 5 minutos, a operação colapsa ou o hacker continua dentro do sistema?' Se a resposta for sim, o card pertence à Alta Prioridade.",
  "Após estancar o vazamento e garantir que a empresa está operando em segurança, procure por ações que exigem análise de fatos, formalização, comunicações institucionais/legais e mitigação de danos colaterais. Essas ações dependem de dados coletados no passo anterior e, por isso, ocorrem em um segundo momento.",
  "Cuidado com o desespero corporativo. Um bom plano de resposta rejeita agressivamente três tipos de comportamento: gerar pânico/desinformação, procurar culpados em vez de resolver o problema sistêmico, e destruir a cena do crime (o que impede a perícia de entender o ataque)."
];

let timerInterval = null;
let selectedCardElement = null;

// ELEMENTOS DOM
const cardsPool = document.getElementById('cards-pool');
const dropZones = document.querySelectorAll('.drop-zone');
const btnSubmit = document.getElementById('btn-submit');
const btnTip = document.getElementById('btn-tip');
const alertBox = document.getElementById('alert-box');
const timerText = document.getElementById('timer-text');
const timerSeconds = document.getElementById('timer-seconds');
const tipBox = document.getElementById('tip-box');

// INICIALIZAR E RENDERIZAR OS CARDS
function renderCards() {
  cardsPool.innerHTML = '';
  cartas.forEach(cardData => {
    const card = document.createElement('div');
    card.className = 'tier-card';
    card.draggable = true;
    card.setAttribute('data-id', cardData.id);
    card.textContent = cardData.t;

    // EVENTOS DRAG AND DROP (MOUSE & TOUCH)
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);

    // EVENTO DE SELEÇÃO POR CLIQUE (ACESSIBILIDADE / MOBILE)
    card.addEventListener('click', handleCardClick);

    cardsPool.appendChild(card);
  });
}

/*
// LÓGICA DE CLIQUE (SELECIONAR CARD E DEPOIS CLICAR NA COLUNA)
function handleCardClick(e) {
  e.stopPropagation();
  
  if (selectedCardElement === this) {
    // Desseleciona se clicar no mesmo card
    this.classList.remove('selected');
    selectedCardElement = null;
  } else {
    if (selectedCardElement) {
      selectedCardElement.classList.remove('selected');
    }
    selectedCardElement = this;
    this.classList.add('selected');
  }
}

// OUVINTE NAS COLUNAS PARA RECEBER O CARD SELECIONADO VIA CLIQUE
dropZones.forEach(zone => {
  zone.addEventListener('click', function(e) {
    if (selectedCardElement) {
      this.appendChild(selectedCardElement);
      selectedCardElement.classList.remove('selected');
      selectedCardElement = null;
    }
  });

  // DRAG AND DROP HANDLERS
  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.classList.add('drag-over');
  });

  zone.addEventListener('dragleave', () => {
    zone.classList.remove('drag-over');
  });

  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const cardId = e.dataTransfer.getData('text/plain');
    const draggedCard = document.querySelector(`[data-id="${cardId}"]`);
    if (draggedCard) {
      zone.appendChild(draggedCard);
    }
  });
});
*/

// SELEÇÃO DE CARD VIA CLIQUE (CLICA NO CARD)
function handleCardClick(e) {
  e.stopPropagation(); // Impede a propagação para a coluna
  
  if (selectedCardElement === this) {
    this.classList.remove('selected');
    selectedCardElement = null;
  } else {
    if (selectedCardElement) {
      selectedCardElement.classList.remove('selected');
    }
    selectedCardElement = this;
    this.classList.add('selected');
  }
}

// LÓGICA DE CLIQUE NAS COLUNAS (INCLUINDO CABEÇALHOS E TÍTULOS)
document.querySelectorAll('.tierlist-column').forEach(column => {
  column.addEventListener('click', function(e) {
    if (selectedCardElement) {
      const targetZone = this.querySelector('.column-cards') || this.querySelector('.drop-zone');
      if (targetZone) {
        targetZone.appendChild(selectedCardElement);
        selectedCardElement.classList.remove('selected');
        selectedCardElement = null;
      }
    }
  });

  // 2. LÓGICA DE DRAG AND DROP NAS COLUNAS E CABEÇALHOS
  column.addEventListener('dragover', e => {
    e.preventDefault();
    column.classList.add('drag-over');
  });

  column.addEventListener('dragleave', e => {
    column.classList.remove('drag-over');
  });

  column.addEventListener('drop', e => {
    e.preventDefault();
    column.classList.remove('drag-over');
    
    const cardId = e.dataTransfer.getData('text/plain');
    const draggedCard = document.querySelector(`[data-id="${cardId}"]`);
    
    // Se soltar no título ou em qualquer lugar da coluna, envia para a área de cards
    const targetZone = column.querySelector('.column-cards') || column.querySelector('.drop-zone');
    if (draggedCard && targetZone) {
      targetZone.appendChild(draggedCard);
    }
  });
});

// DRAG AND DROP ESPECÍFICO PARA A ÁREA DE CARDS PENDENTES (VOLTAR PRO POOL)
cardsPool.addEventListener('dragover', e => {
  e.preventDefault();
  cardsPool.classList.add('drag-over');
});

cardsPool.addEventListener('dragleave', () => {
  cardsPool.classList.remove('drag-over');
});

cardsPool.addEventListener('drop', e => {
  e.preventDefault();
  cardsPool.classList.remove('drag-over');
  const cardId = e.dataTransfer.getData('text/plain');
  const draggedCard = document.querySelector(`[data-id="${cardId}"]`);
  if (draggedCard) {
    cardsPool.appendChild(draggedCard);
  }
});

cardsPool.addEventListener('click', function() {
  if (selectedCardElement) {
    cardsPool.appendChild(selectedCardElement);
    selectedCardElement.classList.remove('selected');
    selectedCardElement = null;
  }
});
// ****

function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', this.getAttribute('data-id'));
  this.classList.add('dragging');
  if (selectedCardElement) {
    selectedCardElement.classList.remove('selected');
    selectedCardElement = null;
  }
}

function handleDragEnd() {
  this.classList.remove('dragging');
}

// TEMPORIZADOR E BLOQUEIO DE AÇÕES
function startLockout(seconds, showAlertBox = false) {
  if (showAlertBox) alertBox.classList.remove('hidden');   
  timerText.classList.remove('hidden');
  
  btnSubmit.disabled = true;
  btnTip.disabled = (currentTipIndex >= tips.length);

  // Obtém os segundos que ainda restam no contador (ou 0 se não houver tempo ativo)
  const currentRemaining = parseInt(timerSeconds.textContent, 10) || 0;  

  //let remaining = seconds; //antes so atribuia, mas agora deve incrementar a penalidade
  // Se o alerta ainda estiver visível/ativo, incrementa o tempo restante com a nova penalidade
  let remaining = (!timerText.classList.contains('hidden') && currentRemaining > 0)
    ? currentRemaining + seconds
    : seconds;  
  timerSeconds.textContent = remaining;

  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    remaining--;
    timerSeconds.textContent = remaining;

    if (remaining <= 0) {
      clearInterval(timerInterval);
      alertBox.classList.add('hidden');
      timerText.classList.add('hidden');
      btnSubmit.disabled = false;
      if (currentTipIndex < tips.length) btnTip.disabled = false;
    }
  }, 1000);
}

// SUBMETER RESPOSTA
btnSubmit.addEventListener('click', () => {
  // 1. Verifica se todos os cards foram movidos para alguma coluna
  const poolCards = cardsPool.querySelectorAll('.tier-card');
  if (poolCards.length > 0) {
    //alert("Por favor, classifique todos os cards antes de submeter!");
    startLockout(lockout_wrong_answer, true);
    return;
  }

  let isAllCorrect = true;

  // 2. Valida se cada card está em uma coluna válida segundo sua propriedade 'aceita'
  cartas.forEach(cardData => {
    const cardEl = document.querySelector(`[data-id="${cardData.id}"]`);
    const parentZone = cardEl.parentElement;
    const assignedCol = parentZone.getAttribute('data-col');

    if (!cardData.aceita.includes(assignedCol)) {
      isAllCorrect = false;
    }
  });

  if (isAllCorrect) {
    alertBox.classList.add('hidden');
    //alert("Resposta correta!");
    window.location.href = 'extra.html';
  } else {
    startLockout(lockout_wrong_answer, true);
  }
});

// EXIBIR DICAS
btnTip.addEventListener('click', () => {
  if (currentTipIndex < tips.length) {
    tipBox.classList.remove('hidden');
    tipBox.innerHTML += `<div><strong>Dica ${currentTipIndex + 1}:</strong> ${tips[currentTipIndex]}</div>`;
    currentTipIndex++;

    if (currentTipIndex >= tips.length) {
      btnTip.disabled = true;
      btnTip.textContent = "Sem mais dicas";
    }

    startLockout(lockout_tip, false);
  }
});

// INICIALIZAR
renderCards();