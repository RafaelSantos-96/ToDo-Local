// Carrega tarefas ao iniciar
document.addEventListener("DOMContentLoaded", carregarTarefas);

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const lista = document.getElementById("todo-list");

// Adiciona tarefa
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const texto = input.value.trim();
  if (texto) {
    adicionarTarefa(texto);
    salvarTarefa(texto);
    input.value = "";
  }
});

// Adiciona item na interface
function adicionarTarefa(texto) {
  const li = document.createElement("li");
  li.textContent = texto;

  const btn = document.createElement("button");
  btn.textContent = "Excluir";
  btn.onclick = function () {
    removerTarefa(texto);
    li.remove();
  };

  li.appendChild(btn);
  lista.appendChild(li);
}

// Salva no localStorage
function salvarTarefa(texto) {
  const tarefas = buscarTarefas();
  tarefas.push(texto);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Carrega tarefas salvas
function carregarTarefas() {
  const tarefas = buscarTarefas();
  tarefas.forEach(adicionarTarefa);
}

// Remove tarefa do localStorage
function removerTarefa(texto) {
  const tarefas = buscarTarefas();
  const atualizadas = tarefas.filter(t => t !== texto);
  localStorage.setItem("tarefas", JSON.stringify(atualizadas));
}

// Busca lista do localStorage
function buscarTarefas() {
  return JSON.parse(localStorage.getItem("tarefas")) || [];
}

