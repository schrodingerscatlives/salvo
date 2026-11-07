// CONFIGURAÇÃO DOS TEMPOS DE BLOQUEIO (EM SEGUNDOS)
const lockout_wrong_answer = 5;
const lockout_tip = 10;

// DICAS DISPONÍVEIS PARA O NÍVEL 4
let currentTipIndex = 0;
const tips = [
  "Lembre-se de que a segurança da informação começa no mundo físico. Há pontos críticos que controlam acessos muito importantes e estão expostos ao alcance das mãos de qualquer visitante mal-intencionado.",
  "Audite as estações de trabalho procurando por hábitos de colaboradores que facilitam o acesso direto aos sistemas da empresa.",
  "A LGPD exige que saibamos quem acessou o quê e quando. Procure por dois processos no escritório onde a falta de registros ou de configuração adequada impede completamente a auditoria de saber quem realizou uma ação.",
  "Existem pontos críticos nesta sala onde dados confidenciais ficaram completamente expostos a olhos curiosos.",
  "Avalie a infraestrutura lógica do ambiente. Há uma configuração invisível no ar e coloca dados corporativos em risco."
];

let timerInterval = null;

// ELEMENTOS DOM
const btnSubmit = document.getElementById('btn-submit');
const btnTip = document.getElementById('btn-tip');
const alertBox = document.getElementById('alert-box');
const timerText = document.getElementById('timer-text');
const timerSeconds = document.getElementById('timer-seconds');
const tipBox = document.getElementById('tip-box');

// TEMPORIZADOR E TRAVAMENTO DE BOTÕES
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
  const checkedValues = Array.from(
    document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked')
  ).map(cb => cb.value).sort();

  // Respostas corretas strictly solicitadas: g, h, i, j, k, l, m, n, o, p
  const correctValues = ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'].sort();

  const isCorrect = 
    checkedValues.length === correctValues.length &&
    checkedValues.every((val, index) => val === correctValues[index]);

  if (isCorrect) {
    alertBox.classList.add('hidden');
    //alert("Resposta correta!");
    window.location.href = 'tierlist.html';
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