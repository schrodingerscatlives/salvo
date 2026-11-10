// CONFIGURAÇÃO: Define se exibe o destino real do link em telas pequenas/mobile (<= 768px)
const SHOW_LINK_DESTINATION_ON_MOBILE = false;
const SHOW_LINK_DESTINATION_ON_LARGE_SCREENS = false;

// DADOS DOS E-MAILS
const emailsData = {
  1: {
    sender: "ti@redemangue.com.br",
    name: "Equipe de TI",
    subject: "Lembrete: treinamento de segurança na quinta",
    body: `Olá, equipe.<br><br>Lembrando que o treinamento de segurança da informação será na quinta, às 10h, na sala 3. Dúvidas, falem com a TI no ramal 2040.<br><br>Equipe de TI, Rede Mangue Mercados`
  },
  2: {
    sender: "compliance.lgpd@redemangue.com.br",
    name: "Encarregado de Dados (DPO) - Rede Mangue",
    subject: "Pesquisa de Consciência em Segurança e Tratamento de Dados Pessoais e Operacionais",
    body: `Olá, colaborador(a),<br><br>Como parte do nosso programa contínuo de adequação à Lei Geral de Proteção de Dados (LGPD) e fortalecimento da cultura de cibersegurança — especialmente considerando o aumento de ameaças globais direcionadas a redes de varejo e seus fornecedores de infraestrutura crítica —, convidamos você a responder à nossa breve pesquisa interna de percepção de riscos.<br><br>O questionário leva menos de 3 minutos e nos ajuda a mapear pontos de melhoria nos treinamentos corporativos. Suas respostas são totalmente confidenciais e anonimizadas.<br><br>Você pode acessar a plataforma oficial de conformidade através do link seguro da rede interna: <a href="#" class="phishing-link" title="https://compliance.redemangue.com.br/pesquisa2026">compliance.redemangue.com.br/pesquisa2026</a>.<br><br>Agradecemos sua colaboração na proteção dos dados dos nossos clientes e da operação da Rede Mangue.<br><br>Atenciosamente,<br><strong>Marcos Vinícius</strong><br>Encarregado de Proteção de Dados (DPO) / LGPD<br>Rede Mangue Mercados`,
  },
  3: {
    sender: "seguranca.ti@redemangue.com.br",
    name: "Governança e Segurança da Informação",
    subject: "Comunicado Oficial: Atualização obrigatória de diretrizes de acesso remoto (LGPD / Cadeia de Suprimentos)",
    body: `Prezados gestores e operadores de sistemas da Rede Mangue Mercados,<br><br>Em virtude dos recentes incidentes cibernéticos noticiados internacionalmente, a Diretoria de Tecnologia e o comitê de conformidade da LGPD determinam a revisão imediata dos protocolos de segurança para acesso aos sistemas de telemetria de frio.<br><br>Pedimos que leiam atentamente o documento orientativo em anexo (<span style="color: #0066cc;">Diretrizes_Seguranca_Frio_v4.pdf</span>) e repassem as diretrizes às equipes de turno. Nenhuma credencial de acesso corporativo deve ser compartilhada por canais externos.<br><br>Para dúvidas técnicas ou reporte de anomalias operacionais, utilize exclusivamente o canal interno oficial ou abra um chamado no portal <a href="#" class="phishing-link" title="https://intranet.redemangue.com.br/suporte">intranet.redemangue.com.br/suporte</a>.<br><br>Atenciosamente,<br><strong>Comitê de Gestão de Riscos e Segurança da Informação</strong><br>Rede Mangue Mercados S.A.`,
    attachment: "Diretrizes_Seguranca_Frio_v4.pdf"
  },
  4: {
    sender: "suporte.tecnico@friotech.com.br",
    name: "Central de Atendimento FrioTech",
    subject: "Aviso Programado: Janela de manutenção nos servidores de telemetria das câmaras frias",
    body: `Prezado cliente (Rede Mangue Mercados),<br><br>Informamos que, visando garantir a estabilidade e a segurança contra vulnerabilidades recentes que afetam infraestruturas críticas de refrigeração na Europa, realizaremos uma atualização programada nos servidores centrais de monitoramento de temperatura da FrioTech.<br><br><strong>Data da intervenção:</strong> Quarta-feira, das 01:00 às 03:00 (horário de Brasília).<br><strong>Impacto esperado:</strong> Indisponibilidade temporária dos gráficos de telemetria em tempo real no painel web. Os controladores locais instalados nos compressores dos supermercados continuarão operando de modo autônomo, garantindo a segurança dos alimentos armazenados sem risco de interrupção mecânica.<br><br>Qualquer suporte de emergência durante a janela pode ser acionado pelo telefone de plantão corporativo informado em seu contrato de SLA. O status em tempo real pode ser acompanhado em <a href="#" class="phishing-link" title="https://status.friotech.com.br">status.friotech.com.br</a>.<br><br>Atenciosamente,<br>Equipe de Operações e Infraestrutura de TI<br>FrioTech`,
  },
  5: {    
    sender: "suporte@fri0tech-portal.com",
    name: "Suporte FrioTech",
    subject: "URGENTE: seu acesso ao painel expira em 2 horas",
    body: `Prezado cliente,<br><br>Detectamos atividade incomum na sua conta. Para evitar o bloqueio do monitoramento das suas lojas, revalide seu login e senha em até 2 horas:<br><br><a href="#" class="phishing-link" title="https://fri0tech.com.br/acesso">www.fri0tech.com.br/acesso</a> <span class="mobile-link-destination">&lt;https://fri0tech.com.br/acesso&gt;</span><br><br>Equipe de Suporte`
  },
  6: {
    sender: "faturamento@friotech.com.br",
    name: "Setor Financeiro - FrioTech",
    subject: "NF-e 004829/2026 - Manutenção Preventiva dos compressores (Lojas 5 a 12)",
    body: `Olá, equipe financeira e de suprimentos da Rede Mangue,<br><br>Conforme o contrato de prestação de serviços de manutenção preventiva dos sistemas de refrigeração comercial (referente ao cronograma de novembro), encaminhamos em anexo a Nota Fiscal nº 004829/2026 e o respectivo relatório técnico assinado pelos engenheiros responsáveis em campo.<br><br>Lembramos que o boleto bancário correspondente foi gerado diretamente no DDA cadastrado em nosso sistema oficial. Em caso de divergências nos valores ou necessidade de conferência, acessem o portal do cliente em <a href="#" class="phishing-link" title="https://friotеch.com.br/financeiro">friotеch.com.br/financeiro</a>.<br><br>Cordialmente,<br><strong>Débora Siqueira</strong><br>Departamento de Faturamento e Cobrança<br>FrioTech Sistemas de Refrigeração Ltda.`,
    attachment: "NF_004829_FrioTech.pdf"
  },
  7: {
    sender: "rh@redemangue.com.br",
    name: "Recursos Humanos",
    subject: "Holerite de outubro disponível",
    body: `Olá!<br><br>O holerite de outubro já pode ser consultado no Portal do RH. Acesse: <a href="#" class="phishing-link" title="https://redemangue.com.br/acesso">redemangue.com.br/acesso</a> <span class="mobile-link-destination">&lt;https://redemangue.com.br/acesso&gt;</span>.<br><br>Recursos Humanos`
  },  
  8: {
    sender: "contato@friotech.com.br",
    name: "Carla Mendes - FrioTech",
    subject: "Boletim trimestral de manutenção",
    body: `Prezado Paulo,<br><br>O relatório de manutenção do 3º trimestre das 40 lojas segue em anexo e já está disponível no portal de clientes.<br><a href="#" class="phishing-link" title="https://friotech.com.br/acesso">www.friotech.com.br/acesso</a> <span class="mobile-link-destination">&lt;https://friotech.com.br/acesso&gt;</span><br><br>Atenciosamente,<br>Carla Mendes, FrioTech`,
    attachment: "Relatorio.pdf"
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
function startLockout(seconds, showAlertBox = false) {
  if (showAlertBox) alertBox.classList.remove('hidden');   
  timerText.classList.remove('hidden');
  
  btnSubmitStep1.disabled = true;
  btnSubmitStep2.disabled = true;

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
    }
  }, 1000);
}

function atualizarTextoOpcaoExtra(cb_name, cb_text) {
  const checkboxText = document.getElementById(cb_name);
  if (checkboxText) {
    checkboxText.textContent = cb_text;
  }
}

// APERTOU "ENVIAR" NA ETAPA 1
btnSubmitStep1.addEventListener('click', () => {
  if (selectedEmailId === 5) {
    // Acertou a isca de Phishing
    alertBox.classList.add('hidden');
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
  } else if (selectedEmailId === 6) {
    // Acertou a isca "secreta" de Phishing
    atualizarTextoOpcaoExtra('text-cb-b', 'Uso de caracteres homógrafos (letras cirílicas/internacionais) para imitar o domínio original;');
    atualizarTextoOpcaoExtra('text-cb-c', 'Aparente normalidade (não há urgência) e tom corporativo comum para baixar a guarda do usuário;');
    atualizarTextoOpcaoExtra('text-cb-d', 'Não exige dados no texto, mas leva a uma página de acesso clonada para que o usuário digite suas credenciais sem desconfiar;');
    alertBox.classList.add('hidden');
    step1.classList.add('hidden');
    step2.classList.remove('hidden');    
  } else {
    // Errou o e-mail -> Penalidade de 30s
    startLockout(lockout_wrong_answer, true); 
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
    //alert("Resposta Correta!");
    window.location.href = 'social.html';
  } else {
    // Resposta incorreta -> Penalidade de 30s
    startLockout(lockout_wrong_answer, true);
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
    startLockout(lockout_tip);
  }
});

// INICIALIZAÇÃO

// Aplica a exibição do link explicativo apenas se a constante estiver ativa
//if (SHOW_LINK_DESTINATION_ON_MOBILE || SHOW_LINK_DESTINATION_ON_LARGE_SCREENS) {
//  document.body.classList.add('show-mobile-links');
//}


document.addEventListener("DOMContentLoaded", () => {
  //EMBARALHA OS Checkboxes da resposta (segunda etapa do nivel)
  shuffleCheckboxes();
});

//selectEmail(1); //Aqui abre ja no conteudo do primeiro email.
// Aqui ao invés de abrir dentro do primeiro email, abre com o primeiro email selecionado, porem na caixa de entrada.
renderEmail(1);
webmailBody.classList.remove('viewing-email');