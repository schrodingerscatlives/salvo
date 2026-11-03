// CONFIGURAÇÕES DE LOCKOUT
const lockout_wrong_answer = 5;
const lockout_tip = 10;

// ARRAY COM AS CONVERSAS (6 ITENS)
// P: 'R' (Remetente / Mensagem recebida) | 'D' (Destinatário / Mensagem enviada pelo Paulo)
const chatsData = [
  {
    id: 1,
    avatar: "images/avatar/avatar_1.png",
    name: "Ana Diretoria",
    when: "Ontem",
    messages: [
      { type: "R", time: "10:33", text: "Bom dia Paulo! Tou com um problema na minha estação e não tou conseguindo abrir chamado no portal" },
      { type: "R", time: "10:34", text: "Entra com meu usuário e registra um chamado pra impressora da operação, por gentileza" },
      { type: "R", time: "10:34", text: "anasilva mangue@2026" },
      { type: "D", time: "10:38", text: "Bom dia Ana, abro sim" },
      { type: "D", time: "10:40", text: "2026031105487" },
      { type: "D", time: "10:40", text: "Feito" },
      { type: "R", time: "10:41", text: "Grata" }
    ]
  },
  {
    id: 2,
    avatar: "images/avatar/avatar_2.png",
    name: "Marcos TI",
    when: "Hoje",
    messages: [
      { type: "R", time: "08:15", text: "Paulo, os servidores das lojas 04 e 08 vão passar por reinício rápido às 12h." },
      { type: "D", time: "08:20", text: "Tranquilo Marcos, aviso os gerentes das unidades." },
      { type: "R", time: "08:22", text: "Valeu!" }
    ]
  },
  {
    id: 3,
    avatar: "images/avatar/avatar_3.png",
    name: "Grupo Operações Loja 03",
    when: "Hoje",
    messages: [
      { type: "R", time: "09:10", text: "Alguém tem o contato do fornecedor de bobinas térmicas?" },
      { type: "D", time: "09:15", text: "Enviei no e-mail do grupo pessoal." }
    ]
  },
  {
    id: 4,
    avatar: "images/avatar/avatar_4.png",
    name: "+55 81 91236-5478 ~Ana Diretora",
    when: "Hoje",
    messages: [
      { type: "R", time: "21:52", text: "Paulo, é a Ana. Tou no aeroporto, celular quase sem bateria. Troquei de chip. Salva esse número novo por gentileza." },
      { type: "R", time: "21:52", text: "O técnico da FrioTech precisa entrar no sistema AGORA pra uma manutenção de emergência, senão a gente perde a câmara fria inteira 😨" },
      { type: "R", time: "21:53", text: "Vai chegar um código de 6 dígitos no seu celular. Me manda aqui que eu repasso pra ele" },
      { type: "R", time: "21:56", text: "Chegou? Não consigo atender ligação, tô no embarque. Só responde aqui" },
      { type: "R", time: "21:56", text: "Resolve isso pra mim, por favor. Não dá pra esperar até amanhã" },
      { type: "D", time: "21:58", text: "Oi Ana, só um minuto. Vou conferir aqui" }
    ]
  },
  {
    id: 5,
    avatar: "images/avatar/avatar_5.png",
    name: "Carlos Gerente Loja 05",
    when: "Hoje",
    messages: [
      { type: "R", time: "14:00", text: "Paulo, a recepção de hortifruti da Loja 05 foi finalizada." },
      { type: "D", time: "14:12", text: "Show! Obrigado pelo aviso Carlos." }
    ]
  },
  {
    id: 6,
    avatar: "images/avatar/avatar_6.png",
    name: "Friotech",
    when: "Hoje",
    messages: [
      { type: "R", time: "21:53", text: "Seu código de acesso é 482 913. Não compartilhe este código com ninguém." }
    ]
  }
];

let selectedChatId = 1;
let currentTipIndex = 0;
const tips = [
  "Preste atenção nos contatos que alegam mudança repentina de número e pedem urgência.",
  "Verifique se o remetente está salvo na lista oficial ou se possui o símbolo ~ no número.",
  "Códigos de segurança recebidos via SMS/WhatsApp nunca devem ser repassados a terceiros.",
  "Golpistas usam desculpas de imprevistos (como 'estou no aeroporto') para impedir que você faça uma ligação de confirmação."
];

let timerInterval = null;

// ELEMENTOS DOM
const chatListItems = document.getElementById('chat-list-items');
const chatMessagesArea = document.getElementById('chat-messages-area');
const chatHeaderName = document.getElementById('chat-header-name');
const chatHeaderStatus = document.getElementById('chat-header-status');
const chatHeaderImg = document.getElementById('chat-header-img');
const backToChatsBtn = document.getElementById('back-to-chats-btn');
const zapBody = document.getElementById('zap-body');

const btnSubmitStep1 = document.getElementById('btn-submit-step1');
const btnSubmitStep2 = document.getElementById('btn-submit-step2');
const btnTip = document.getElementById('btn-tip');
const alertBox = document.getElementById('alert-box');
const timerText = document.getElementById('timer-text');
const timerSeconds = document.getElementById('timer-seconds');
const tipBox = document.getElementById('tip-box');

const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');

// RENDERIZAR LISTA DE CONVERSAS NA ESQUERDA
function renderChatList() {
  chatListItems.innerHTML = '';
  chatsData.forEach(chat => {
    const item = document.createElement('div');
    item.className = `chat-item ${chat.id === selectedChatId ? 'active' : ''}`;
    item.setAttribute('data-id', chat.id);

    const lastMsg = chat.messages[chat.messages.length - 1];
    const previewText = lastMsg ? lastMsg.text : '';

    // Formata o nome para a lista caso tenha ~
    let displayNameHtml = chat.name;
    if (chat.name.includes('~')) {
      const parts = chat.name.split('~');
      displayNameHtml = `${parts[0]}<br><span class="chat-subname">~${parts[1]}</span>`;
    }

    item.innerHTML = `
      <div class="chat-item-avatar">
        <img src="${chat.avatar}" alt="Avatar" onerror="this.src='https://via.placeholder.com/40'">
      </div>
      <div class="chat-item-content">
        <div class="chat-item-top">
          <span class="chat-item-name">${displayNameHtml}</span>
          <span class="chat-item-time">${chat.when}</span>
        </div>
        <div class="chat-item-preview">${previewText}</div>
      </div>
    `;

    item.addEventListener('click', () => selectChat(chat.id));
    chatListItems.appendChild(item);
  });
}

// RENDERIZAR AS MENSAGENS DA CONVERSA ATIVA
function renderMessages(chatId) {
  const chat = chatsData.find(c => c.id === chatId);
  if (!chat) return;

  // Atualiza cabeçalho do chat
  if (chat.name.includes('~')) {
    const parts = chat.name.split('~');
    chatHeaderName.innerHTML = `${parts[0]} <span class="chat-header-subname">~${parts[1]}</span>`;
  } else {
    chatHeaderName.textContent = chat.name;
  }
  
  chatHeaderImg.src = chat.avatar;

  let html = `<div class="chat-date-chip"><span>${chat.when}</span></div>`;

  // Se o contato não está salvo (contém ~)
  if (chat.name.includes('~')) {
    html += `
      <div class="unknown-contact-warning">
        Este número não está nos seus contatos.
      </div>
    `;
  }

  // Gera balões de mensagens
  chat.messages.forEach(msg => {
    const isOut = msg.type === 'D'; // Sent por Paulo (verde)
    const bubbleClass = isOut ? 'msg-bubble-out' : 'msg-bubble-in';
    const checkmarks = isOut ? '<span class="checks">✓✓</span>' : '';

    html += `
      <div class="msg-row ${isOut ? 'row-out' : 'row-in'}">
        <div class="msg-bubble ${bubbleClass}">
          <div class="msg-text">${msg.text}</div>
          <div class="msg-meta">
            <span class="msg-time">${msg.time}</span>
            ${checkmarks}
          </div>
        </div>
      </div>
    `;
  });

  chatMessagesArea.innerHTML = html;
  chatMessagesArea.scrollTop = chatMessagesArea.scrollHeight;
}

// SELECIONAR CONVERSA
function selectChat(id) {
  selectedChatId = Number(id);

  document.querySelectorAll('.chat-item').forEach(item => {
    if (Number(item.getAttribute('data-id')) === selectedChatId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  renderMessages(selectedChatId);

  // No mobile, alterna visão para o chat aberto
  if (window.innerWidth <= 768) {
    zapBody.classList.add('viewing-chat');
  }
}

// BOTÃO VOLTAR NO MOBILE
backToChatsBtn.addEventListener('click', () => {
  zapBody.classList.remove('viewing-chat');
});

// TEMPORIZADOR DE LOCKOUT
function startLockout(seconds, showAlertBox = false) {
  if (showAlertBox) alertBox.classList.remove('hidden');   
  timerText.classList.remove('hidden');
  
  btnSubmitStep1.disabled = true;
  btnSubmitStep2.disabled = true;
  btnTip.disabled = (currentTipIndex >= tips.length);

  let remaining = seconds;
  timerSeconds.textContent = remaining;

  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    remaining--;
    timerSeconds.textContent = remaining;

    if (remaining <= 0) {
      clearInterval(timerInterval);
      alertBox.classList.add('hidden');
      timerText.classList.add('hidden');
      btnSubmitStep1.disabled = false;
      btnSubmitStep2.disabled = false;
      if (currentTipIndex < tips.length) btnTip.disabled = false;
    }
  }, 1000);
}

// SUBMETER ETAPA 1 (ISCA DA CONVERSA)
btnSubmitStep1.addEventListener('click', () => {
  if (selectedChatId === 4) {
    // Acertou a conversa da Ana Falsa (Id 4)
    alertBox.classList.add('hidden');
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
    // Move o botão de dica para a Etapa 2
    step2.querySelector('.actions-row').insertBefore(btnTip, btnSubmitStep2);
  } else {
    startLockout(lockout_wrong_answer, true);
  }
});

// SUBMETER ETAPA 2 (CHECKBOXES)
btnSubmitStep2.addEventListener('click', () => {
  const checkedValues = Array.from(
    document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked')
  ).map(cb => cb.value).sort();

  const correctValues = ['a', 'c', 'e', 'g'];

  const isCorrect = 
    checkedValues.length === correctValues.length &&
    checkedValues.every((val, index) => val === correctValues[index]);

  if (isCorrect) {
    alertBox.classList.add('hidden');
    //alert("Resposta Correta!");
    window.location.href = 'painel.html';
  } else {
    startLockout(lockout_wrong_answer, true);
  }
});

// EXIBIR DICA
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

// INICIALIZAÇÃO
renderChatList();
renderMessages(1);
zapBody.classList.remove('viewing-chat');