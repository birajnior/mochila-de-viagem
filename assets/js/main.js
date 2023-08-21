const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  criaElemento(
    event.target.elements["nome"].value,
    event.target.elements["quantidade"].value
  );
});

function criaElemento(nome, quantidade) {
  console.log(nome, quantidade);

  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numItem = document.createElement("strong");
  const iconDel = document.createElement("i");
  iconDel.classList.add("fa-regular");
  iconDel.classList.add("fa-trash-can");

  numItem.innerHTML = quantidade;
  novoItem.appendChild(numItem);
  novoItem.innerHTML += nome;
  novoItem.appendChild(iconDel);
  lista.appendChild(novoItem);
}
