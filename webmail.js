// CONFIGURAÇÃO: Define se exibe o destino real do link em telas pequenas/mobile (<= 768px)
const SHOW_LINK_DESTINATION_ON_MOBILE = true;

// DADOS DOS E-MAILS
const emailsData = {
  1: {
    sender: "ti@redemangue.com.br",
    name: "Equipe de TI",
    subject: "Lembrete: treinamento de segurança na quinta",
    body: `Olá, equipe.<br><br>Lembrando que o treinamento de segurança da informação será na quinta, às 10h, na sala 3. Dúvidas, falem com a TI no ramal 2040.<br><br>Equipe de TI, Rede Mangue Mercados`
  },
  2: {
    sender: "contato@friotech.com.br",
    name: "Carla Mendes - FrioTech",
    subject: "Boletim trimestral de manutenção",
    body: `Prezado Paulo,<br><br>O relatório de manutenção do 3º trimestre das 40 lojas segue em anexo e já está disponível no portal de clientes.<br><a href="#" class="phishing-link" title="https://friotech.com.br/acesso">www.friotech.com.br/acesso</a> <span class="mobile-link-destination">&lt;https://friotech.com.br/acesso&gt;</span><br><br>Atenciosamente,<br>Carla Mendes, FrioTech`,
    attachment: "Relatorio.pdf"
  },
  3: {
    sender: "Suporte FrioTech <suporte@fri0tech-portal.com>",
    name: "Suporte FrioTech",
    subject: "URGENTE: seu acesso ao painel expira em 2 horas",
    body: `Prezado cliente,<br><br>Detectamos atividade incomum na sua conta. Para evitar o bloqueio do monitoramento das suas lojas, revalide seu login e senha em até 2 horas:<br><br><a href="#" class="phishing-link" title="https://fri0tech.com.br/acesso">www.friotech.com.br/acesso</a> <span class="mobile-link-destination">&lt;https://fri0tech.com.br/acesso&gt;</span><br><br>Equipe de Suporte`
  },
  4: {
    sender: "rh@redemangue.com.br",
    name: "Recursos Humanos",
    subject: "Holerite de outubro disponível",
    body: `Olá!<br><br>O holerite de outubro já pode ser consultado no Portal do RH. Acesse: <a href="#" class="phishing-link" title="https://redemangue.com.br/acesso">redemangue.com.br/acesso</a> <span class="mobile-link-destination">&lt;https://redemangue.com.br/acesso&gt;</span>.<br><br>Recursos Humanos`
  }
};

let selectedEmailId = 1;
let currentTipIndex = 0;
const tips = [
  "Leiam o endereço do remetente letra por letra;",
  "Confira o endereço real dos links antes de confiar neles;"
];

let timerInterval = null;

// ELEMENTOS DOM
const emailItems = document.querySelectorAll('.email-item');
const emailViewer = document.getElementById('email-viewer');
const emailContentArea = document.getElementById('email-content-area');
const webmailBody = document.querySelector('.webmail-body');
const backToListBtn = document.getElementById('back-to-list-btn');

const toggleSidebarBtn = document.getElementById('toggle-sidebar-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

const btnSubmitStep1 = document.getElementById('btn-submit-step1');
const btnSubmitStep2 = document.getElementById('btn-submit-step2');
const btnTip = document.getElementById('btn-tip');

const alertBox = document.getElementById('alert-box');
const timerText = document.getElementById('timer-text');
const timerSeconds = document.getElementById('timer-seconds');
const tipBox = document.getElementById('tip-box');

const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');

// RENDERIZAR CONTEÚDO DO E-MAIL SELECIONADO
function renderEmail(id) {
  const email = emailsData[id];
  if (!email) return;

  let attachmentHtml = '';
  if (email.attachment) {
    attachmentHtml = `
      <div class="attachment-box">
        <span>📎</span>
        <div>
          <strong>${email.attachment}</strong>
          <div style="font-size: 11px; color: #6b7280;">Documento PDF</div>
        </div>
      </div>
    `;
  }

  const avatarLetter = email.name.charAt(0).toUpperCase();

  emailContentArea.innerHTML = `
    <div class="email-header-view">
      <h2 class="email-title-view">${email.subject}</h2>
      <div class="sender-info">
        <div class="avatar">${avatarLetter}</div>
        <div>
          <div class="sender-name">${email.name}</div>
          <div class="sender-address">De: ${email.sender}</div>
        </div>
      </div>
    </div>
    <div class="email-body-text">${email.body}</div>
    ${attachmentHtml}
  `;
}

// ATUALIZAR BARRA LATERAL (VERDE / CINZA) E EMAIL ATIVO
function selectEmail(id) {
  selectedEmailId = Number(id);

  emailItems.forEach(item => {
    if (item.getAttribute('data-id') == id) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  renderEmail(id);

  // No mobile, alterna a visualização para o leitor de e-mail
  if (window.innerWidth <= 768) {
    webmailBody.classList.add('viewing-email');
  }
}

// EVENT LISTENERS DE SELEÇÃO DE E-MAIL
emailItems.forEach(item => {
  item.addEventListener('click', () => {
    const id = item.getAttribute('data-id');
    selectEmail(id);
  });
});

// VOLTAR PARA A LISTA NO MOBILE
backToListBtn.addEventListener('click', () => {
  webmailBody.classList.remove('viewing-email');
});

// CONTROLE DO MENU LATERAL MOBILE (DRAWER)
toggleSidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  sidebarOverlay.classList.toggle('active');
});

sidebarOverlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('active');
});

// LÓGICA DE BLOQUEIO / TEMPORIZADOR
function startLockout(seconds) {
  alertBox.classList.remove('hidden');
  timerText.classList.remove('hidden');
  
  btnSubmitStep1.disabled = true;
  btnSubmitStep2.disabled = true;

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
    }
  }, 1000);
}

// APERTOU "ENVIAR" NA ETAPA 1
btnSubmitStep1.addEventListener('click', () => {
  if (selectedEmailId === 3) {
    // Acertou a isca de Phishing
    alertBox.classList.add('hidden');
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
  } else {
    // Errou o e-mail -> Penalidade de 30s
    startLockout(30);
  }
});

// APERTOU "ENVIAR RESPOSTA" NA ETAPA 2
btnSubmitStep2.addEventListener('click', () => {
  const checkedValues = Array.from(
    document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked')
  ).map(cb => cb.value).sort();

  const correctValues = ['a', 'b', 'c', 'd'];

  const isCorrect = 
    checkedValues.length === correctValues.length &&
    checkedValues.every((val, index) => val === correctValues[index]);

  if (isCorrect) {
    alertBox.classList.add('hidden');
    alert("Resposta Correta!");
  } else {
    // Resposta incorreta -> Penalidade de 30s
    startLockout(30);
  }
});

// BOTAO "EXIBIR DICA"
btnTip.addEventListener('click', () => {
  if (currentTipIndex < tips.length) {
    tipBox.classList.remove('hidden');
    tipBox.innerHTML += `<div><strong>Dica ${currentTipIndex + 1}:</strong> ${tips[currentTipIndex]}</div>`;
    currentTipIndex++;

    if (currentTipIndex >= tips.length) {
      btnTip.disabled = true;
      btnTip.textContent = "Sem mais dicas";
    }

    // Aplica bloqueio de 1 minuto (60s)
    startLockout(60);
  }
});

// INICIALIZAÇÃO

// Aplica a exibição do link explicativo apenas se a constante estiver ativa
if (SHOW_LINK_DESTINATION_ON_MOBILE) {
  document.body.classList.add('show-mobile-links');
}

//selectEmail(1); //Aqui abre ja no conteudo do primeiro email.
// Aqui ao invés de abrir dentro do primeiro email, abre com o primeiro email selecionado, porem na caixa de entrada.
renderEmail(1);
webmailBody.classList.remove('viewing-email');