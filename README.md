# Quiz Game of Thrones

> *Bem-vindo ao mundo de Westeros! Pronto para o quiz da melhor série de todos os tempos?*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-FF9E3B?style=for-the-badge)

Quiz interativo sobre a série **Game of Thrones**, feito como atividade de um curso de HTML e como projeto de fã. São 10 perguntas sobre personagens, casas e lugares de Westeros, uma tabela que dá um "título" de acordo com o número de acertos e um formulário de feedback que envia a avaliação direto por e-mail.

---

## Funcionalidades

- **10 perguntas** usando tipos diferentes de campo de formulário: múltipla escolha, texto livre, lista suspensa, caixas de seleção e pergunta com imagem
- **Tabela de acertos** que mostra o seu nível de conhecimento sobre a série
- **Gabarito escondido** em um bloco `<details>` — só aparece quando você clica
- **Formulário de feedback** com nome, mensagem e avaliação de **1 a 5 estrelas**, validação dos campos e envio por e-mail via [EmailJS](https://www.emailjs.com/) (sem precisar de back-end)
- **Navegação por âncoras**: atalhos para a tabela de acertos, para o feedback e para voltar ao topo
- Link para assistir à série na HBO Max
- Tema escuro inspirado no clima sombrio de Westeros

## As perguntas

| # | Pergunta | Tipo de campo |
|---|----------|---------------|
| 1 | Quem empurrou Bran Stark da torre em Winterfell? | Múltipla escolha (`radio`) |
| 2 | Qual é o nome do lobo gigante de Jon Snow? | Texto (`text`) |
| 3 | Qual lema tinha a Casa Stark? | Texto (`text`) |
| 4 | Quantos dragões Daenerys tinha? | Lista suspensa (`select`) |
| 5 | Escreva o nome de outra casa não mencionada no quiz | Texto (`text`) |
| 6 | Quem é chamado de "Duende"? | Caixas de seleção (`checkbox`) |
| 7 | Quem é nessa animação? | Imagem + texto |
| 8 | Qual dessas personagens **não** é uma Targaryen? | Múltipla escolha (`radio`) |
| 9 | Qual é o nome do pai de Arya Stark? | Texto (`text`) |
| 10 | Qual dessas cidades **não** faz parte dos Sete Reinos? | Múltipla escolha (`radio`) |

> As respostas não estão aqui para não dar spoiler — elas ficam no próprio site, no bloco **"Verifique suas Respostas"**. Não vale colar!

## Tabela de acertos

A correção é feita pelo próprio jogador: responda tudo, confira o gabarito e veja em qual nível você se encaixa.

| Acertos | Resultado |
|:-------:|-----------|
| 0 – 3 | Iniciante em Westeros |
| 4 – 7 | Conselheiro do Reino |
| 8 – 10 | Corvo de 3 Olhos |

## Tecnologias

- **HTML5** — estrutura do quiz, formulários, tabela e gabarito (`<details>` / `<summary>`)
- **CSS3** — tema escuro, estilo dos campos, tabela, botões e estrelas de avaliação
- **JavaScript** — seleção das estrelas, validação e envio do feedback
- **EmailJS** — envio do feedback por e-mail direto do navegador
- **MySQL** — script de criação do banco `quiz_got`

## Estrutura do projeto

```
quiz-got/
├── index.html     # Página do quiz: perguntas, tabela, gabarito e feedback
├── style.css      # Estilos (tema escuro)
├── script.js      # Estrelas de avaliação + envio do feedback via EmailJS
├── quiz_got.sql   # Script MySQL: banco quiz_got e tabela respostas
└── README.md
```

## Como executar

O site é 100% estático, então não precisa instalar nada.

1. Clone o repositório:
   ```bash
   git clone https://github.com/Andrey-Stark/quiz-got.git
   ```
2. Abra o arquivo `index.html` no navegador (é só dar dois cliques).

Se preferir, abra a pasta no **VS Code** e use a extensão **Live Server** (botão direito em `index.html` → *Open with Live Server*).

## Formulário de feedback (EmailJS)

O `script.js` usa o EmailJS para mandar o feedback por e-mail sem precisar de servidor:

```js
emailjs.init("SUA_PUBLIC_KEY");

emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", {
  nome: nome,
  mensagem: mensagem,
  nota: nota
});
```

Antes de enviar, o script confere se o nome, a mensagem e a nota (estrelas) foram preenchidos. Se faltar algo, aparece uma mensagem de erro em vermelho; se der certo, aparece a confirmação em verde e o formulário é limpo.

**Para usar com a sua própria conta do EmailJS:**

1. Crie uma conta gratuita em [emailjs.com](https://www.emailjs.com/).
2. Em **Email Services**, conecte o seu e-mail e copie o **Service ID**.
3. Em **Email Templates**, crie um template usando as variáveis `{{nome}}`, `{{mensagem}}` e `{{nota}}` e copie o **Template ID**.
4. Em **Account**, copie a sua **Public Key**.
5. Troque esses três valores no `script.js`.

## Banco de dados

O arquivo `quiz_got.sql` cria o banco `quiz_got` com uma tabela para registrar as respostas do quiz:

```sql
CREATE TABLE respostas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  pontuacao FLOAT,
  data_resposta DATE
);
```

Para criar, basta rodar o script no MySQL Workbench (ou em outro cliente MySQL).

> Atualmente o site não se conecta a esse banco, já que ele roda só no navegador (sem back-end).

## Ideias para o futuro

- [ ] Corrigir o quiz automaticamente e mostrar a pontuação na hora
- [ ] Salvar as pontuações na tabela `respostas` (com um back-end em Node.js ou PHP, por exemplo)
- [ ] Enviar também o e-mail digitado no formulário de feedback
- [ ] Deixar o layout responsivo para celular

## Autor

Desenvolvido por **Andrey Damasceno de Souza** — [@Andrey-Stark](https://github.com/Andrey-Stark)

---

*Projeto de fã, sem fins lucrativos. Game of Thrones e seus personagens pertencem à HBO e a George R. R. Martin.*
