# 🛡️ Salvo — Oficina de Segurança da Informação & Proteção de Dados

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub&logoColor=white)
![License MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

**Salvo** é um jogo web interativo e gamificado projetado para a conscientização e treinamento em Segurança da Informação, Engenharia Social e Privacidade de Dados (LGPD). Por meio da simulação de um incidente cibernético no contexto da empresa fictícia **Rede Mangue Mercados**, os alunos vivenciam situações reais de risco e aprendem a identificar brechas lógicas, físicas e comportamentais.

---

## 📖 Sobre o Jogo

Em um ambiente corporativo, a maior parte dos incidentes de segurança ocorre por falhas humanas ou processos não auditados. O **Salvo** coloca os usuários no papel de analistas e auditores encarregados de proteger a infraestrutura e a reputação da Rede Mangue Mercados contra uma tentativa de ataque iminente.

### 🎯 Proposta Pedagógica
- **Aprendizagem Baseada em Cenários (PBL):** Os estudantes interagem com interfaces simuladas de webmail, painéis de gerenciamento IoT, aplicativos de mensageria, plantas visuais e matrizes de tomada de decisão.
- **Feedback Imediato & Sistema Penalizado:** Submissões incorretas ou pedidos de dicas ativam um mecanismo de bloqueio (*lockout*) temporário com contagem regressiva acumulativa, incentivando a reflexão crítica e o trabalho em equipe antes de tentar novamente.
- **Abordagem 360° da Segurança:** O conteúdo abrange desde o ataque de phishing tradicional até vulnerabilidades físicas (mesa limpa, descarte de documentos) e a governança/comunicação de crise após o incidente.

---

## 🎮 Como Jogar

1. **Navegação por Níveis:** O treinamento é dividido em 5 níveis sequenciais e 1 desafio extra.
2. **Análise de Evidências:** Em cada nível, observe os detalhes da simulação na metade superior da tela (remetentes de e-mail, logs de acesso, diálogos no chat, objetos em imagens de escritório ou cards de ação).
3. **Oficina Pedagógica:** Responda às questões, selecione os checkboxes de vulnerabilidades ou organize os cards nas categorias corretas.
4. **Uso de Dicas:** Clique no botão **💡 Exibir Dica** para obter orientações progressivas sobre o desafio. *Atenção: pedir dicas ou errar a submissão aplica uma penalidade de tempo antes que você possa tentar novamente.*
5. **Conclusão:** Ao acertar o desafio, avance para o próximo nível até alcançar a tela final de **Crise Evitada**, onde será necessário redigir o comunicado oficial para a diretoria.

---

## 📑 Níveis e Categorias Disponíveis

O jogo conta com uma estrutura pedagógica dividida em 5 etapas interativas mais uma atividade final:

### ✉️ Nível 1 · Simulação de Webmail (`webmail.html`)
* **Tema:** Phishing & Engenharia Social por E-mail.
* **Cenário:** Análise de uma caixa de entrada contendo e-mails corporativos da FrioTech. O aluno deve examinar remetentes, links mascarados e anexos suspeitos.

### ⚙️ Nível 2 · Painel de Gerenciamento (`painel.html`)
* **Tema:** Auditoria de Configurações, Usuários e Firmware.
* **Cenário:** Um painel administrativo simulado de controle das geladeiras industriais. O jogador identifica credenciais padrão, contas inativas e atualizações pendentes.

### 💬 Nível 3 · Mensageria Instantânea (`social.html`)
* **Tema:** Smishing & Engenharia Social via WhatsApp.
* **Cenário:** Simulação de um chat em tempo real onde um suposto técnico tenta induzir a vítima a fornecer tokens e senhas. O aluno aponta as violações no diálogo.

### 🔍 Nível 4 · Segurança Física e Rotinas (`office.html`)
* **Tema:** Inspeção Física e LGPD na Loja 12.
* **Cenário:** Análise visual de uma imagem da recepção/escritório para marcar inconformidades como post-its com senhas, telas desbloqueadas, documentos sem fragmentação e Wi-Fi de visitantes integrado à rede interna.

### 📊 Nível 5 · Resposta a Incidente (`tierlist.html`)
* **Tema:** Gestão de Crise e Matriz de Urgência (Tierlist).
* **Cenário:** Organização de 9 ações estratégicas entre *Alta Prioridade (Ações Imediatas)*, *Média Prioridade (Segundo Momento)* e *Descartáveis (Sem Relevância)* utilizando sistema de Drag & Drop ou clique.

### 🏆 Desafio Extra · Comunicação de Crise (`extra.html`)
* **Tema:** Governança e Comunicação Institucional.
* **Cenário:** Comemoração da crise evitada com efeito de confetes e redação livre de um comunicado interno cobrindo Transparência, Alinhamento (Porta-voz único) e Cultura de Segurança.

---

## 💻 Tecnologias Utilizadas

A aplicação foi construída com tecnologias web puras (*vanilla*), garantindo altíssimo desempenho, facilidade de manutenção e compatibilidade total:

- **HTML5:** Estrutura semântica dos níveis e componentes de simulação.
- **CSS3:** Estilização modular (`main.css`) com suporte a variáveis CSS, layout responsivo (Flexbox e Grid) e tema escuro moderno.
- **JavaScript (ES6+):** Manipulação dinâmica de DOM, sistema de eventos, timers de bloqueio acumulativos, Drag & Drop API e validação lógicas dos níveis.
- **Canvas Confetti API:** Efeito festivo integrado via CDN para a tela de conclusão.

---

## 🛠️ Como Executar Localmente

Como a aplicação é 100% *client-side*, não é necessário instalar dependências do Node.js ou configurar banco de dados.

### Passos:
1. **Clone o repositório:**   
2. **Acesse a pasta do projeto:**   
3. **Abra o jogo no navegador:**
   - **Direto no navegador:** Dê um duplo clique no arquivo `index.html`, ou
   - **Via VS Code:** Utilize a extensão **Live Server** no VS Code para rodar um servidor local em `http://127.0.0.1:5500`.
   - **Via PowerShell (Python):**
     ```powershell
     cd "c:\salvo"
     python -m http.server 8000
     ```
     *(e acessar `http://localhost:8000` no navegador)*

---

## 📁 Estrutura de Pastas

```text
salvo/
├── index.html        # Página inicial de apresentação e entrada da oficina
├── webmail.html      # Nível 1 - Simulação de E-mail / Phishing
├── webmail.js        # Lógica e validações do Nível 1
├── painel.html       # Nível 2 - Simulação de Painel de Configurações
├── painel.js         # Lógica e validações do Nível 2
├── social.html       # Nível 3 - Simulação de Chat / WhatsApp
├── social.js         # Lógica e validações do Nível 3
├── office.html       # Nível 4 - Inspeção de Segurança Física
├── office.js         # Lógica e validações do Nível 4
├── tierlist.html     # Nível 5 - Resposta a Incidentes (Tierlist)
├── tierlist.js       # Lógica e interação Drag & Drop do Nível 5
├── extra.html        # Tela de Conclusão, Confetes e Desafio Extra
├── common.js         # Utilitários e funções compartilhadas
├── main.css          # Estilos globais e responsivos de todo o jogo
└── favicon.ico       # Ícone da aplicação
└── images            # Diretório que ontém imagens utilizadas dentro dos níveis
```

---

## 🤝 Contribuição e Licença

Contribuições são muito bem-vindas! Se você deseja adicionar novos níveis, sugerir cenários de simulação ou melhorar os estilos visuais:

1. Faça um **Fork** do projeto.
2. Crie uma **Branch** para a sua funcionalidade (`git checkout -b feature/novo-nivel`).
3. Envie suas alterações (`git commit -m 'Adiciona novo nível de segurança'`).
4. Abra um **Pull Request**.

Este projeto está licenciado sob a Licença **MIT** — consulte o arquivo `LICENSE` para obter mais detalhes.