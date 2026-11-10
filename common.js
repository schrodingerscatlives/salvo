//CONFIGURAÇÃO: Define os tempos de espera (em segundos) para o caso de resposta errada ou dica solicitada
const lockout_wrong_answer = 30;
const lockout_tip = 20;
//const lockout_wrong_answer = 5;
//const lockout_tip = 10;

//EMBARALHA OS Checkboxes da resposta (segunda etapa do nivel)
function shuffleCheckboxes(){
  // 1. Seleciona o container e os itens dos checkboxes
  const container = document.querySelector('.checkbox-group');
  const items = Array.from(container.querySelectorAll('.checkbox-item'));

  // 2. Algoritmo Fisher-Yates para embaralhar a array de elementos
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  // 3. Remove os antigos e insere os itens embaralhados de volta no DOM
  container.innerHTML = '';
  items.forEach(item => container.appendChild(item));    
}