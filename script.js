let nome_prato = null,
  preco_prato = null;
let nome_bebida = null,
  preco_bebida = null;
let nome_sobremesa = null,
  preco_sobremesa = null;

let itens_selecionados = 0;

function textoPedido() {
  let texto = "Olá, gostaria de fazer o pedido:\n";
  texto += "- Prato: " + nome_prato + "\n";
  texto += "- Bebida: " + nome_bebida + "\n";
  texto += "- Sobremesa: " + nome_sobremesa + "\n";
  const preco =
    parseFloat(preco_prato.replace(",", ".")) +
    parseFloat(preco_bebida.replace(",", ".")) +
    parseFloat(preco_sobremesa.replace(",", "."));
  texto += "Total: R$ " + preco.toFixed(2).replace(".", ",");
  texto = "https://wa.me/" + "?text=" + encodeURIComponent(texto);
  return texto;
}

function selecionaItem(secao, e) {
  const preco = e.getElementsByClassName("preco")[0].innerText;
  const nome = e.getElementsByTagName("h2")[0].innerText;

  //remove a selecao de qualquer outro item daquela secao
  const container = document.getElementsByClassName(secao)[0];
  const items_secao = container.getElementsByClassName("item-selecao");
  for (let i = 0; i < items_secao.length; i++) {
    items_secao[i].classList.remove("selecionado");
  }

  e.classList.add("selecionado");
  setaValores(nome, preco, secao);
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
  if (itens_selecionados === 3) {
    const botao = document.getElementsByClassName("btn-fechar-pedido")[0];
    botao.innerText = "Fechar pedido";
    botao.disabled = false;
    botao.classList.remove("btn-desabilitado");
    botao.classList.add("btn-habilitado");
  }
}

function finalizaPedido() {
  alert(textoPedido());
}
