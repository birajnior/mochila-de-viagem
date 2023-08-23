const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((element) => {
  criaElemento(element);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = event.target.elements["nome"];
  const quantidade = event.target.elements["quantidade"];

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };
  criaElemento(itemAtual);

  itens.push(itemAtual);

  localStorage.setItem("itens", JSON.stringify(itens));

  nome.value = "";
  quantidade.value = "";
});

function criaElemento(item) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numItem = document.createElement("strong");

  const iconDel = document.createElement("i");
  iconDel.classList.add("fa-regular");
  iconDel.classList.add("fa-trash-can");

  numItem.innerHTML = item.quantidade;
  novoItem.appendChild(numItem);
  novoItem.innerHTML += item.nome;
  novoItem.appendChild(iconDel);

  lista.appendChild(novoItem);
}
