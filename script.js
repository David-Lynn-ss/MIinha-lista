// Seleciona os elementos
const inputTarefa = document.getElementById('tarefa');
const botaoAdicionar = document.getElementById('adicionar');
const listaTarefas = document.getElementById('lista-tarefas');

// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar tarefa
botaoAdicionar.addEventListener('click', () => {
 const tarefaTexto = inputTarefa.value;
 if (tarefaTexto) {
 tarefas.push({ texto: tarefaTexto, concluida: false });
 inputTarefa.value = '';
 atualizarLista();
 }
});

// Função para atualizar a lista
function atualizarLista() {
 listaTarefas.innerHTML = '';
 tarefas.forEach((tarefa, index) => {
 const li = document.createElement('li');
 const checkbox = document.createElement('input');
 checkbox.type = 'checkbox';
 checkbox.checked = tarefa.concluida;
 checkbox.addEventListener('change', () => {
 tarefas[index].concluida = !tarefa.concluida;
 atualizarLista();
 });

 const span = document.createElement('span');
 span.textContent = tarefa.texto;
 span.style.textDecoration = tarefa.concluida ? 'line-through' : 'none';

 const botaoRemover = document.createElement('button');
 botaoRemover.textContent = 'Remover';
 botaoRemover.addEventListener('click', () => {
 tarefas.splice(index, 1);
 atualizarLista();
 });

 li.appendChild(checkbox);
 li.appendChild(span);
 li.appendChild(botaoRemover);
 listaTarefas.appendChild(li);
 });
}