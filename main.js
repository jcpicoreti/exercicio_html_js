document.addEventListener("DOMContentLoaded", function () {
  // Adiciona um event listener para o formulário
  let formulario = document.getElementById("campos");
  formulario.addEventListener("submit", function (event) {
    // Impede o envio padrão do formulário, que recarregaria a página
    event.preventDefault();

    // Chama a função para validar o formulário
    validarFormulario();
  });
});

function validarFormulario() {
  let campoA = document.getElementById("campoA").value;
  let campoB = document.getElementById("campoB").value;

  // Converter os valores para números
  campoA = parseFloat(campoA);
  campoB = parseFloat(campoB);

  // Verificar se B é maior que A
  if (campoB > campoA) {
    exibirMensagem("Formulário válido! B é maior que A.", true);
  } else {
    exibirMensagem("Formulário inválido! B deve ser maior que A.", false);
  }
}

function exibirMensagem(mensagem, isValid) {
  let mensagemDiv = document.getElementById("mensagem");

  // Limpar mensagem anterior
  mensagemDiv.innerHTML = "";

  // Criar elemento de mensagem
  let mensagemElement = document.createElement("p");
  mensagemElement.textContent = mensagem;

  // Adicionar classe de estilo com base na validação
  mensagemElement.classList.add(isValid ? "valid" : "invalid");

  // Adicionar mensagem à div
  mensagemDiv.appendChild(mensagemElement);
}
