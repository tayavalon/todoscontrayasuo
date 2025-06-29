document.getElementById('botao1').style.backgroundColor = 'lightblue';
const mensagemDiv1 = document.getElementById('mensagem1');

document.getElementById("botao1").addEventListener("click", function() {
    alert("Erro: Aqui não aceitamos main yasuo.");
    window.close();
});

const botao2 = document.getElementById('botao2');
const mensagemDiv2 = document.getElementById('mensagem2');

botao2.addEventListener('click', () => {
  mensagemDiv2.textContent = 'Ótimo, você escolheu o caminho certo!';
  mensagemDiv2.style.color = 'black';
  mensagemDiv2.style.fontSize = '20px';

  for(let i = 0; i < 20; i++) {
    const balao = document.createElement('span');
    balao.classList.add('balao');

    const tamanho = Math.random() * 50 + 30;
    balao.style.width = tamanho + 'px';
    balao.style.height = tamanho + 'px';

    balao.style.left = (Math.random() * window.innerWidth) + 'px';
    balao.style.top = (Math.random() * window.innerHeight) + 'px';

    balao.style.backgroundColor = getRandomColor();

    document.body.appendChild(balao);

    balao.addEventListener('animationend', () => {
      balao.remove();
    });
  }
});


function getRandomColor() {
  const cores = ['#FF5733', '#33FF57', '#3357FF', '#FF33D4', '#F3FF33', '#33FFF9', '#FF9933'];
  return cores[Math.floor(Math.random() * cores.length)];
}