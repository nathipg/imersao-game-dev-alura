class Personagem {

    constructor(imagem, dimMap, escala) {
        this.dimMap = dimMap;
        this.escala = escala;

        this.imagem = imagem;
        this.matriz = [];

        for(let j = 0; j < this.dimMap.colunas; j++) {
            for(let i = 0; i < this.dimMap.linhas; i++) {
            
                this.matriz.push([
                    i * this.dimMap.largura,
                    j * this.dimMap.altura
                ]);
            }
        }

        this.frameAtual = 0;
    }

    exibe() {
        image(this.imagem, 0, height - this.dimMap.altura * this.escala, this.dimMap.largura * this.escala, this.dimMap.altura * this.escala, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.dimMap.largura, this.dimMap.altura);
        this.anima();
    }

    anima() {
        this.frameAtual++;

        if(this.frameAtual >= this.matriz.length) {
            this.frameAtual = 0;
        }
    }

}