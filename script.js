// Texto da carta
const textoCompleto = `Bea, queria me desculpar por não ter ido te visitar todo esse tempo que está afastada e em um momento sensível. Mas, tentei fazer isso e escrever essas coisas a fim de reafirmar meu carinho e amor por você. Bea, você é especial demais e uma pessoa apaixonante. Estou com muitas coisas ultimamente, porém te amo e espero que se recupere o mais brevemente possível.\nCom carinho, Helo.`;

// Onde o texto será mostrado
const textoElemento = document.getElementById('texto');
const botoes = document.getElementById('botoes');
const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');
const poema = document.getElementById('poema');
const btnVoltar = document.getElementById('btn-voltar');
let index = 0;

// Função de escrever
function escreverTexto() {
  if (index < textoCompleto.length) {
    textoElemento.innerHTML += textoCompleto.charAt(index);
    index++;
    setTimeout(escreverTexto, 50); // velocidade de digitação
  } else {
    // Quando terminar de escrever, mostra os botões
    if (botoes) botoes.classList.remove('hidden');
  }
}

// ´Para quando abrir a pagina, escrever
window.onload = escreverTexto;

// Quando clicar no botao sim
if (btnSim) {
  btnSim.addEventListener('click', () => {
    if (botoes) botoes.classList.add('hidden');
    if (poema) poema.classList.remove('hidden');
    criarConfetes(); // Explosão de confetes
  });
}

// Quando passar o mouse ou clicar no botao nao
const btnnao = document.getElementById('btn-nao');

// Função para fazer o botão fugir
function fugirBotaoNao() {
  const maxX = window.innerWidth - btnNao.offsetWidth;
  const maxY = window.innerHeight - btnNao.offsetHeight;
  const aleatorioX = Math.floor(Math.random() * maxX);
  const aleatorioY = Math.floor(Math.random() * maxY);
  btnNao.style.position = 'absolute';
  btnNao.style.left = aleatorioX + 'px';
  btnNao.style.top = aleatorioY + 'px';
}

// Mouseover para desktop
btnNao.addEventListener('mouseover', fugirBotaoNao);

// Touchstart para mobile
btnNao.addEventListener('touchstart', fugirBotaoNao);

// Função para criar os confetes
function criarConfetes() {
  for (let i = 0; i < 100; i++) {
    const confete = document.createElement('div');
    confete.classList.add('confete');
    confete.style.left = Math.random() * 100 + 'vw';
    confete.style.top = Math.random() * 100 + 'vh';
    document.body.appendChild(confete);

    setTimeout(() => {
      confete.remove();
    }, 3000);
  }
}

// Adiciona o evento de clique para o botão "Voltar"
if (btnVoltar) {
  btnVoltar.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redireciona para a página inicial
  });
}

