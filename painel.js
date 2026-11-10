// SISTEMA DE DICAS
let currentTipIndex = 0;
/*
const tips = [
  "Contas inativas ou de colaboradores desligados devem ser desativadas (desmarcar 'Ativo').",
  "Todas as contas ativas precisam de Verificação em 2 etapas e Log de Acesso ativado.",
  "Senhas devem ser fortes (mínimo 8 caracteres, maiúsculas, minúsculas, números e símbolos).",
  "Não se esqueçam de navegar até o menu de Manutenção para instalar a atualização pendente do painel!"
];*/
const tips = [
  "Chaves fracas quebram fácil contra ataques de força bruta.",
  "Garanta que cada usuário precise de uma segunda confirmação para entrar e que os rastros de suas ações sejam sempre gravados.",
  "Contas fantasmas são o alvo perfeito para invasores.",
  "A fundação de toda segurança começa na base onde o sistema opera. Garanta que o painel não esteja exposto a brechas antigas."
];

// DADOS DOS USUÁRIOS (MANTIDOS)
const usersData = [
  {
    id: "admin",
    name: "admin",
    mfa: false,
    active: true,
    readOnly: false,
    remote: false,
    log: true,
    role: "Manutenção",
    email: "suporte@friotech.com.br",
    obs: "",
    password: "admin"
  },
  {
    id: "paulo.santos",
    name: "paulo.santos",
    mfa: false,
    active: true,
    readOnly: false,
    remote: true,
    log: false,
    role: "Gerente",
    email: "paulo.santos@redemangue.com.br",
    obs: "",
    password: "mangue@2026"
  },
  {
    id: "joao.silva",
    name: "joao.silva",
    mfa: false,
    active: true,
    readOnly: false,
    remote: false,
    log: true,
    role: "Técnico",
    email: "joao.silva@redemangue.com.br",
    obs: "Técnico desligado há 8 meses. Solicitado desativação do usuário em todos as plataformas através do chamado 202608315542",
    password: generateStrongPassword()
  },
  {
    id: "maria.costa",
    name: "maria.costa",
    mfa: true,
    active: true,
    readOnly: false,
    remote: false,
    log: true,
    role: "Gerente Regional",
    email: "maria.costa@redemangue.com.br",
    obs: "",
    password: generateStrongPassword()
  },
  {
    id: "manut.loja12",
    name: "manut.loja12",
    mfa: false,
    active: true,
    readOnly: false,
    remote: true,
    log: true,
    role: "Manutenção",
    email: "loja12@redemangue.com.br",
    obs: "Conta utilizada pelos seis gerentes da loja 12.",
    password: "abcd@1234"
  },
  {
    id: "relatorio.auto",
    name: "relatorio.auto",
    mfa: true,
    active: true,
    readOnly: true,
    remote: true,
    log: true,
    role: "Automação",
    email: "automacao@friotech.com.br",
    obs: "Conta interna para geração do relatório semanal.",
    password: generateStrongPassword()
  },
  {
    id: "friotech.suporte",
    name: "friotech.suporte",
    mfa: true,
    active: true,
    readOnly: false,
    remote: true,
    log: false,
    role: "Suporte",
    email: "suporte@redemangue.com.br",
    obs: "Acesso remoto do fornecedor ligado 24h.",
    password: generateStrongPassword()
  },
  {
    id: "carlos.lima",
    name: "carlos.lima",
    mfa: true,
    active: true,
    readOnly: false,
    remote: true,
    log: true,
    role: "Supervisor",
    email: "carlos.lima@redemangue.com.br",
    obs: "",
    password: generateStrongPassword()
  }
];

let selectedUserIndex = 0;
let isSystemUpdated = false;
let timerInterval = null;

// ELEMENTOS DO DOM
const btnSubmit = document.getElementById('btn-submit');
const btnTip = document.getElementById('btn-tip');
const alertBox = document.getElementById('alert-box');
const timerText = document.getElementById('timer-text');
const timerSeconds = document.getElementById('timer-seconds');
const tipBox = document.getElementById('tip-box');

// ELEMENTOS DE NAVEGAÇÃO LATERAL
const portalSidebar = document.getElementById('portal-sidebar');
const portalOverlay = document.getElementById('portal-sidebar-overlay');
const togglePortalSidebarBtn = document.getElementById('toggle-portal-sidebar-btn');

const viewDashboard = document.getElementById('view-dashboard');
const viewUser = document.getElementById('view-user');
const viewMaintenance = document.getElementById('view-maintenance');
const storesGrid = document.getElementById('stores-grid');

const btnUpdateSystem = document.getElementById('btn-update-system');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');
const systemUpdatedMsg = document.getElementById('system-updated-msg');
const updateNotice = document.getElementById('update-notice');
const currentVersionText = document.getElementById('current-version-text');

// AUXILIARES DE SENHA
function generateStrongPassword() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*";
  let pass = "";
  for (let i = 0; i < 12; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass + "1#aA";
}

function isPasswordStrong(pwd) {
  if (!pwd || pwd.length < 8) return false;
  return /[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && /[0-9]/.test(pwd) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd);
}

// RENDERIZAR LOJAS 01 A 12 NO DASHBOARD
function renderDashboardStores() {
  let html = '';
  for (let i = 1; i <= 12; i++) {
    const num = i < 10 ? `0${i}` : i;
    const temp = (-17.5 - (i * 0.1)).toFixed(1);
    html += `
      <div class="store-card">
        <div class="store-card-header">Freezers Loja ${num}</div>
        <div class="store-temp-value">${temp} °C</div>
        <span class="store-status-ok">● Status OK</span>
      </div>
    `;
  }
  storesGrid.innerHTML = html;
}

// RENDERIZAR O USUÁRIO ATUAL NA TELA DE DETALHES
function renderSelectedUser(index) {
  selectedUserIndex = index;
  const user = usersData[index];
  const isStrong = isPasswordStrong(user.password);

  viewUser.innerHTML = `
    <div class="user-detail-card ${user.active ? '' : 'user-inactive'}">
      <div class="user-card-header">
        <h3 class="user-name-title">Configurações de Usuário: <strong>${user.name}</strong></h3>
        <span class="user-status-badge ${user.active ? 'active' : 'disabled'}">
          ${user.active ? 'Ativo' : 'Desativado'}
        </span>
      </div>

      <div class="user-card-body">
        <div class="form-row flex-row">
          <label class="check-label"><input type="checkbox" id="chk-mfa" ${user.mfa ? 'checked' : ''}> Verificação em duas etapas</label>
        </div>

        <div class="form-row flex-row">
          <label class="check-label"><input type="checkbox" id="chk-active" ${user.active ? 'checked' : ''}> Ativo</label>
          <label class="check-label disabled-check"><input type="checkbox" disabled ${user.readOnly ? 'checked' : ''}> Somente leitura</label>
        </div>

        <div class="form-row flex-row">
          <label class="check-label"><input type="checkbox" id="chk-remote" ${user.remote ? 'checked' : ''}> Permitir acesso remoto</label>
          <label class="check-label"><input type="checkbox" id="chk-log" ${user.log ? 'checked' : ''}> Manter log de acesso</label>
        </div>

        <div class="form-row-grid margin-top">
          <div class="field-group">
            <label>Função:</label>
            <input type="text" value="${user.role}" readonly class="input-readonly">
          </div>
          <div class="field-group">
            <label>E-mail:</label>
            <input type="text" value="${user.email}" readonly class="input-readonly">
          </div>
        </div>

        <div class="field-group margin-top">
          <label>Senha:</label>
          <div class="password-input-wrapper">
            <input type="password" id="input-user-pass" value="${user.password}" class="input-password">
            <button class="btn-toggle-eye" id="btn-eye" title="Revelar/Ocultar">👁️</button>
          </div>
          <div class="password-feedback">
            <span class="${isStrong ? 'pwd-strong' : 'pwd-weak'}" id="pass-status" hidden>${isStrong ? 'Senha Forte ✓' : 'Senha Fraca ⚠️'}</span>
            <small class="password-rules" id="password-rules" hidden>Regra para senha forte: min 8 caracteres, maiúsculas, minúsculas, números e símbolos.</small>
          </div>
        </div>

        <div class="field-group margin-top">
          <label>Observações:</label>
          <textarea class="txt-obs input-readonly" id="txt-user-obs" readonly>${user.obs}</textarea>
        </div>
      </div>
    </div>
  `;

  bindUserEvents(index);
}

// BIND DOS EVENTOS DO FORMULÁRIO DO USUÁRIO SELECIONADO
function bindUserEvents(index) {
  const user = usersData[index];
  
  document.getElementById('chk-mfa').addEventListener('change', (e) => user.mfa = e.target.checked);
  document.getElementById('chk-active').addEventListener('change', (e) => {
    user.active = e.target.checked;
    renderSelectedUser(index);
  });
  document.getElementById('chk-remote').addEventListener('change', (e) => user.remote = e.target.checked);
  document.getElementById('chk-log').addEventListener('change', (e) => user.log = e.target.checked);
  
  const eyeBtn = document.getElementById('btn-eye');
  const passInput = document.getElementById('input-user-pass');
  const statusSpan = document.getElementById('pass-status');
  const statusSmall = document.getElementById('password-rules');

  // Função auxiliar para atualizar visual e visibilidade do texto da senha
  function updatePasswordStatus() {
    const isStrong = isPasswordStrong(passInput.value);
    statusSpan.className = isStrong ? 'pwd-strong' : 'pwd-weak';
    statusSpan.textContent = isStrong ? 'Senha Forte ✓' : 'Senha Fraca ⚠️';

    // Mostra o texto da força da senha APENAS se o campo estiver legível (tipo 'text')
    if (passInput.type === 'text') {
      //statusSpan.classList.remove('hidden');
      //statusSmall.classList.remove('hidden');      
      statusSpan.style.display = 'block';
      statusSmall.style.display = 'block';      
    } else {
      //statusSpan.classList.add('hidden');
      //statusSmall.classList.add('hidden');      
      statusSpan.style.display = 'none';
      statusSmall.style.display = 'none';            
    }
  }  


  eyeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    passInput.type = passInput.type === 'password' ? 'text' : 'password';
    updatePasswordStatus();
  });

  passInput.addEventListener('input', (e) => {
    user.password = e.target.value;
    updatePasswordStatus();
  });

  document.getElementById('txt-user-obs').addEventListener('change', (e) => user.obs = e.target.value);
}

// CONTROLE DA NAVEGAÇÃO LATERAL (ROTEADOR)
document.querySelectorAll('[data-target]').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    clearActiveMenu();
    item.classList.add('active');

    const target = item.getAttribute('data-target');
    viewDashboard.classList.add('hidden');
    viewUser.classList.add('hidden');
    viewMaintenance.classList.add('hidden');

    document.getElementById(target).classList.remove('hidden');
    closeMobileSidebar();
  });
});

document.querySelectorAll('.sub-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    clearActiveMenu();
    item.classList.add('active');

    const index = Number(item.getAttribute('data-user-index'));
    viewDashboard.classList.add('hidden');
    viewMaintenance.classList.add('hidden');
    viewUser.classList.remove('hidden');

    renderSelectedUser(index);
    closeMobileSidebar();
  });
});

function clearActiveMenu() {
  document.querySelectorAll('.menu-item, .sub-item').forEach(el => el.classList.remove('active'));
}

// CONTROLE MOBILE DO MENU LATERAL
togglePortalSidebarBtn.addEventListener('click', () => {
  portalSidebar.classList.toggle('open');
  portalOverlay.classList.toggle('active');
});

portalOverlay.addEventListener('click', closeMobileSidebar);

function closeMobileSidebar() {
  portalSidebar.classList.remove('open');
  portalOverlay.classList.remove('active');
}

// ATUALIZADOR DO SISTEMA
btnUpdateSystem.addEventListener('click', () => {
  btnUpdateSystem.disabled = true;
  progressContainer.classList.remove('hidden');

  let pct = 0;
  const interval = setInterval(() => {
    pct += 2;
    progressBar.style.width = pct + "%";
    progressPercent.textContent = pct + "%";

    if (pct >= 100) {
      clearInterval(interval);
      isSystemUpdated = true;
      updateNotice.classList.add('hidden');
      systemUpdatedMsg.classList.remove('hidden');
      currentVersionText.textContent = "v3.0.0 (Atualizado)";
      currentVersionText.classList.remove('legacy');
      currentVersionText.classList.add('updated');
    }
  }, 100);
});

// SUBMETER E TEMPORIZADORES DE LOCKOUT
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

btnSubmit.addEventListener('click', () => {
  let isCorrect = true;

  if (!isSystemUpdated) isCorrect = false;

  usersData.forEach(user => {
    if (user.id === "manut.loja12" || user.id === "joao.silva") {
      if (user.active) isCorrect = false;
    } else {
      if (!user.active || !user.mfa || !user.log || !isPasswordStrong(user.password)) {
        isCorrect = false;
      }
    }
  });

  if (isCorrect) {
    alertBox.classList.add('hidden');
    //alert("Resposta correta!");
    window.location.href = 'office.html';
  } else {
    startLockout(lockout_wrong_answer, true);
  }
});

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
renderDashboardStores();