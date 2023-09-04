const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) => {
  criaElemento(elemento);
});

// Envio do formulário
form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  // Verificação de itens
  const existe = itens.find((elemento) => elemento.nome === nome.value);

  // Criando o objeto
  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  if (existe) {
    itemAtual.id = existe.id;

    atualizaElemento(itemAtual);
    itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
  } else {
    itemAtual.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;

    criaElemento(itemAtual);
    itens.push(itemAtual);
  }

  localStorage.setItem("itens", JSON.stringify(itens));

  // Volta o formulário vazio após o envio
  nome.value = "";
  quantidade.value = "";
});

// Criação de um novo elemento
function criaElemento(item) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numItem = document.createElement("strong");

  numItem.innerHTML = item.quantidade;
  novoItem.appendChild(numItem);
  numItem.dataset.id = item.id;
  novoItem.innerHTML += item.nome;

  lista.appendChild(novoItem);

  novoItem.appendChild(botaoDeleta(item.id));
}

function atualizaElemento(item) {
  document.querySelector("[data-id='" + item.id + "']").innerHTML =
    item.quantidade;
}

function botaoDeleta(id) {
  const iconDel = document.createElement("i");
  iconDel.classList.add("fa-regular");
  iconDel.classList.add("fa-trash-can");

  iconDel.addEventListener("click", function () {
    deletaElemento(this.parentNode, id);
  });
  return iconDel;
}

function deletaElemento(tag, id) {
  tag.remove();
  // remover o item do Array
  itens.splice(
    itens.findIndex((elemento) => elemento.id === id),
    1
  );
  // reescrever no localStorage
  localStorage.setItem("itens", JSON.stringify(itens));
}
