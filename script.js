let nome_prato = null,
  preco_prato = null;
let nome_bebida = null,
  preco_bebida = null;
let nome_sobremesa = null,
  preco_sobremesa = null;

let itens_selecionados = 0;

function mostraValores() {
  console.log(
    `${nome_prato}, ${preco_prato}
        ${nome_bebida}, ${preco_bebida}
        ${nome_sobremesa}, ${preco_sobremesa}
        
        `
  );
}
function selecionaItem(secao, e) {
  console.log(secao);
  console.log(e);
  const preco = e.getElementsByClassName("preco")[0].innerText;
  const nome = e.getElementsByTagName("h2")[0].innerText;
  console.log(nome, preco);

  //remove a selecao de qualquer outro item daquela secao
  const container = document.getElementsByClassName(secao)[0];
  const items_secao = container.getElementsByClassName("item-selecao");
  for (let i = 0; i < items_secao.length; i++) {
    items_secao[i].classList.remove("selecionado");
  }

  e.classList.add("selecionado");
  setaValores(nome, preco, secao);
  mostraValores();
}

function setaValores(nome, preco, secao) {
  if (secao === "prato") {
    if (nome_prato === null) itens_selecionados++;
    nome_prato = nome;
    preco_prato = preco;
  } else if (secao === "bebida") {
    if (nome_bebida === null) itens_selecionados++;
    nome_bebida = nome;
    preco_bebida = preco;
  } else if (secao === "sobremesa") {
    if (nome_sobremesa === null) itens_selecionados++;
    nome_sobremesa = nome;
    preco_sobremesa = preco;
  }
}
