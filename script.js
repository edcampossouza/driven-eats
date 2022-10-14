const numero_telefone = "5537991555529";

let nome_prato = null,
  preco_prato = null;
let nome_bebida = null,
  preco_bebida = null;
let nome_sobremesa = null,
  preco_sobremesa = null;

let itens_selecionados = 0;

//bloqueia os outros comandos quando
//a tela de confirmacao estiver ativada

let tela_confirmacao = false;

const caixa_confirmacao =
  document.getElementsByClassName("caixa-confirmacao")[0];

function textoUrl() {
  let texto = "Olá, gostaria de fazer o pedido:\n";
  texto += "- Prato: " + nome_prato + "\n";
  texto += "- Bebida: " + nome_bebida + "\n";
  texto += "- Sobremesa: " + nome_sobremesa + "\n";
  const preco =
    parseFloat(preco_prato.replace(",", ".")) +
    parseFloat(preco_bebida.replace(",", ".")) +
    parseFloat(preco_sobremesa.replace(",", "."));
  texto += "Total: R$ " + preco.toFixed(2);
  texto = "https://wa.me/" + numero_telefone + "?text=" + encodeURIComponent(texto);
  return texto;
}

function textoPedido() {
  const preco =
    parseFloat(preco_prato.replace(",", ".")) +
    parseFloat(preco_bebida.replace(",", ".")) +
    parseFloat(preco_sobremesa.replace(",", "."));
  let htmlPedido = `<p><span>${nome_prato}</span><span>${preco_prato}</span></p>
  <p><span>${nome_bebida}</span><span>${preco_bebida}</span></p>
  <p> <span>${nome_sobremesa}</span><span>${preco_sobremesa}</span></p>
  <p class='total'><span>Total</span><span>R$ ${preco
    .toFixed(2)
    .replace(".", ",")}</span></p>
  `;
  return htmlPedido;
}

function selecionaItem(secao, e) {
  if (tela_confirmacao) return;
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
  const url = textoUrl();
  const elementoLink = caixa_confirmacao.getElementsByTagName("a")[0];
  elementoLink.href = url;
  const txt_pedido = document.getElementsByClassName("texto-pedido")[0];
  txt_pedido.innerHTML = textoPedido();

  caixa_confirmacao.classList.add("mostra");
  tela_confirmacao = true;
}

function confirmarPedido() {
  //enviar para whatsapp

  alert(url);
}

function cancelarPedido() {
  tela_confirmacao = false;
  caixa_confirmacao.classList.remove("mostra");
}
