const animaisLista = document.querySelector(".animais-lista");

function executarCallback(event) {
  const currentTarget = event.currentTarget;
  const target = event.target;
  const type = event.type;
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener("click", executarCallback);

const linkExterno = document.querySelector('a[href^="http"');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", clickNoLink);

function handleKeyboard(event) {
  if (event.key === "f") {
    document.body.classList.toggle("fullscreen");
  }
}

window.addEventListener("keydown", handleKeyboard);

function handleImg(event) {
  console.log(event.target);
}

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll("body *");

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleClickElemento);
});

function handleClickElemento(event) {
  console.log(event.currentTarget);
}

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// function handleClickElemento(event) {
//   event.currentTarget.remove();
// }

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleClickT);
