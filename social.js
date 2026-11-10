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
      { type: "R", time: "10:34", text: "anaalves mangue@2026" },
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
    when: "Ontem",
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
    when: "Ontem",
    messages: [
      { type: "R", time: "07:10", text: "Alguém tem o contato do fornecedor de bobinas térmicas?" },
      { type: "D", time: "07:15", text: "Enviei no e-mail do grupo pessoal." },
      { type: "R", time: "07:30", text: "Bom dia, equipe! Abrindo o plantão da Loja 03. Checklist matinal dos freezers concluído, temperatura estável em -18°C." },
      { type: "R", time: "07:32", text: "@Paulo, aproveitando: o coletor de dados (coletor 04) travou na tela de login de inventário. Consegue dar um 'reboot' remoto nele pelo painel da TI?" },
      { type: "D", time: "07:40", text: "Bom dia! Consigo sim, aguenta só 5 minutinhos que vou acessar o console do MDM aqui." },
      { type: "D", time: "07:45", text: "Prontinho, reinicialização forçada enviada. Tenta colocar sua matrícula de novo aí." },
      { type: "R", time: "07:47", text: "Maravilha, Paulo! Voltou ao normal agora. Salvou o turno, obrigado!" },
      { type: "R", time: "09:10", text: "Alguém tem o contato atualizado do fornecedor de bobinas térmicas para as impressoras fiscais do caixa?" },
      { type: "D", time: "09:15", text: "Enviei no e-mail do grupo de suprimentos da rede, dá uma olhada lá." },
      { type: "R", time: "09:18", text: "Visto aqui, valeu! Outra coisa: a balança do setor de frios deu pane na etiqueta de preço por peso." },
      { type: "R", time: "09:19", text: "O código de barras sai cortado. Precisa abrir chamado com a Toledo?" },
      { type: "D", time: "09:22", text: "Sim, abre chamado direto no portal deles e me copia no ticket para eu acompanhar o SLA." },
      { type: "R", time: "09:25", text: "Fechado. Assim que o técnico emitir a ordem de serviço, eu aviso aqui no grupo." }      
    ]
  },
  {
    id: 4,
    avatar: "images/avatar/avatar_3.png",
    name: "Diretoria Executiva - Grupo Gestão",
    when: "Ontem",
    messages: [
      { type: "R", time: "16:40", text: "[Mensagem encaminhada] Prezados, devido aos incidentes cibernéticos que paralisaram concorrentes na Europa, nenhuma alteração de firewall externo será feita sem autorização dupla." },
      { type: "R", time: "16:41", text: "Paulo, você que cuida do alinhamento com a FrioTech, confirma se o contrato de SLA deles prevê acesso remoto restrito por VPN corporativa com certificado?" },
      { type: "D", time: "16:45", text: "Olá! Sim, chefe. O contrato estipula que a FrioTech só acessa via túnel IPsec homologado e com MFA ativo no token físico." },
      { type: "R", time: "16:46", text: "Excelente. Mantenha esse rigor máximo esta semana. Qualquer tentativa fora do padrão, bloqueie imediatamente e reporte à TI." },
      { type: "D", time: "16:47", text: "Combinado, tudo sob controle por aqui." }
    ]
  },  
  {
    id: 5,
    avatar: "images/avatar/avatar_5.png",
    name: "Carlos Gerente Loja 05",
    when: "Hoje",
    messages: [
      { type: "R", time: "08:00", text: "Bom dia, Paulo! Tudo bem? Passando para avisar que a carreta de resfriados da madrugada descarregou no estoque da Loja 05 sem avarias." },
      { type: "R", time: "08:02", text: "O termômetro do baú estava marcando 3.5°C na chegada, dentro do padrão de segurança alimentar da nossa política." },
      { type: "D", time: "08:10", text: "Bom dia, Carlos! Excelente notícia. Anotação registrada aqui no sistema de controle da cadeia de frio." },
      { type: "R", time: "11:45", text: "Paulo, escuta só: o display do ar-condicionado da sala de atendimento ao cliente travou no modo manual e está congelando o ambiente. Consegue reiniciar via automação?" },
      { type: "D", time: "11:50", text: "Consigo sim! Vou mandar um comando de reinício para o CLP da unidade agora ao meio-dia, aproveitando o horário de menor movimento." },
      { type: "R", time: "11:52", text: "Perfeito, agradeço demais! O pessoal da recepção já estava reclamando do frio polar aqui rs." },
      { type: "R", time: "14:00", text: "Paulo, só atualizando: o comando deu certo, o display voltou ao normal e a temperatura estabilizou em 22°C." },
      { type: "R", time: "14:01", text: "A recepção de hortifruti da Loja 05 também já foi totalmente finalizada e validada pelo fiscal de turno." },
      { type: "D", time: "14:12", text: "Show de bola! Obrigado pelo aviso, Carlos. Qualquer outra instabilidade no sistema operacional de monitoramento, me chama aqui." }
    ]
  },
{
    id: 6,
    avatar: "images/avatar/avatar_3.png",
    name: "+55 81 99101-1213 ~Mariana Martinez",
    when: "Hoje",
    messages: [
      { type: "R", time: "11:20", text: "Paulo, tudo bem? Notamos vários alertas de tentativas de login falhas na sua conta da rede nas últimas horas." },
      { type: "R", time: "11:21", text: "Isso coincidiu com o alerta global de ataques cibernéticos contra parceiros de refrigeração na Europa." },
      { type: "D", time: "11:22", text: "Putz, sério? Mas eu só acessei do meu note e do celular corporativo." },
      { type: "R", time: "11:22", text: "Sim, por precaução o sistema de Governança forçou a expiração da sua sessão. Precisa redefinir a senha no próximo acesso." },
      { type: "R", time: "11:23", text: "Faça isso **somente** pelo portal oficial de identidade (`id.redemangue.com.br`). *Nunca* informe sua senha atual por chat, viu?" },
      { type: "D", time: "11:24", text: "Perfeito, Mariana. Já vou alterar por lá agora mesmo. Obrigado pelo aviso!" },
      { type: "R", time: "15:24", text: "Imagina! Qualquer coisa me chama." }
    ]
  },
  {
    id: 7,
    avatar: "images/avatar/avatar_4.png",
    name: "+55 81 91236-5478 ~Ana Alves",
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
    id: 8,
    avatar: "images/avatar/avatar_6.png",
    name: "Friotech",
    when: "Hoje",
    messages: [
      { type: "R", time: "21:53", text: "Seu código de acesso é 482 913. Não compartilhe este código com ninguém." }
    ]
  },  
  {
    id: 9,
    avatar: "images/avatar/avatar_3.png",
    name: "Engenharia FrioTech - Plantão",
    when: "Hoje",
    messages: [
      { type: "R", time: "22:05", text: "Olá Paulo, aqui é o engenheiro Roberto da FrioTech (Plantão de Emergência Noturna)." },
      { type: "R", time: "22:05", text: "Recebemos um alerta de variação brusca de pressão no compressor principal da Loja 12." },
      { type: "D", time: "22:07", text: "Eita! O painel aqui marcou queda de telemetria agora há pouco também." },
      { type: "R", time: "22:07", text: "Pois é. Nossa equipe de campo já está em deslocamento com a viatura 04 para checar a válvula física no local." },
      { type: "R", time: "22:08", text: "Para evitar acionamento incorreto do alarme geral de incêndio/amônia, precisamos que você aprove a janela de override técnico no painel mestre." },
      { type: "D", time: "22:10", text: "Entendido. Vou liberar o acesso temporário restrito direto no terminal seguro da gerência." },
      { type: "R", time: "22:11", text: "Perfeito. Te dou retorno assim que o técnico Bruno estiver plugado na chave física." }
    ]
  },
  {
    id: 10,
    avatar: "images/avatar/avatar_7.png",
    name: "Carla Mendes - FrioTech",
    when: "Hoje",
    messages: [
      { type: "R", time: "22:30", text: "Boa noite, Paulo! Tudo bem?" },
      { type: "R", time: "22:30", text: "Lembra daquele relatório trimestral de manutenção preventiva das 40 lojas que enviei ontem por e-mail?" },
      { type: "D", time: "22:35", text: "Boa noite Carla! Sim, recebi e já encaminhei para a auditoria interna." },
      { type: "R", time: "22:35", text: "Ótimo! Só notei agora que a tabela da Loja 08 ficou com uma linha duplicada na medição de temperatura de ontem." },
      { type: "R", time: "22:36", text: "Vou gerar um aditivo corrigido e te mando por e-mail oficial da FrioTech ainda hoje, tá?" },
      { type: "D", time: "22:38", text: "Sem problemas, tranquilo! Fico no aguardo." },
      { type: "R", time: "22:38", text: "Obrigada pela parceria!" }
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
      btnSubmitStep1.disabled = false;
      btnSubmitStep2.disabled = false;
      if (currentTipIndex < tips.length) btnTip.disabled = false;
    }
  }, 1000);
}

// SUBMETER ETAPA 1 (ISCA DA CONVERSA)
btnSubmitStep1.addEventListener('click', () => {
  if (selectedChatId === 7) {
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

  const correctValues = ['a', 'c', 'e'];

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

document.addEventListener("DOMContentLoaded", () => {
  //EMBARALHA OS Checkboxes da resposta (segunda etapa do nivel)
  shuffleCheckboxes();
});


renderChatList();
renderMessages(1);
zapBody.classList.remove('viewing-chat');