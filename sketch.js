let imagemCenario;
let imagemPersonagem;
let cenario;
let somJogo;
let personagem;

function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    somJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(imagemPersonagem, {
        largura: 220,
        altura: 270,
        linhas: 4,
        colunas: 4
    }, 0.5);
    frameRate(30);
    somJogo.loop();
}

function draw() {
    cenario.exibe();
    cenario.move();

    personagem.exibe();
}