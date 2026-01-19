document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("K3RW9uPRskvOZ8BFW");

  const form = document.getElementById("feedback-form");
  const botao = document.getElementById("btn-enviar");
  const statusMsg = document.getElementById("status-msg");

  let nota = 0;

  // ⭐ Estrelas
  document.querySelectorAll(".estrela").forEach((estrela) => {
    estrela.addEventListener("click", function () {
      nota = this.getAttribute("data-valor");

      document.querySelectorAll(".estrela").forEach(e => {
        e.classList.remove("ativa");
      });

      for (let i = 0; i < nota; i++) {
        document.querySelectorAll(".estrela")[i].classList.add("ativa");
      }
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // ❌ Validação
    if (!nome || !mensagem || nota === 0) {
      statusMsg.textContent = "Preencha todos os campos e selecione uma nota.";
      statusMsg.className = "erro";
      return;
    }

    // ⏳ Enviando...
    botao.disabled = true;
    botao.textContent = "Enviando...";
    statusMsg.textContent = "";

    emailjs.send("santosfc", "template_nnay9v9", {
      nome: nome,
      mensagem: mensagem,
      nota: nota
    })
    .then(() => {
      statusMsg.textContent = "Feedback enviado com sucesso! Obrigado 😊";
      statusMsg.className = "sucesso";
      form.reset();
      botao.textContent = "Enviar";
      botao.disabled = false;

      document.querySelectorAll(".estrela").forEach(e => e.classList.remove("ativa"));
      nota = 0;
    })
    .catch(() => {
      statusMsg.textContent = "Erro ao enviar feedback.";
      statusMsg.className = "erro";
      botao.textContent = "Enviar";
      botao.disabled = false;
    });
  });

});
