const precoDoEtanol = 4.23;
const precoDaGasolina = 5.80;
const distanciaKM = 280;
const consumoMedio = 12;
const combustivel = "etanol";

class CalculadoraDeViagem {
    constructor(precoDoEtanol, precoDaGasolina, distanciaKM, consumoMedio, valorGasto) {
        this.precoDoEtanol = precoDoEtanol;
        this.precoDaGasolina = precoDaGasolina;
        this.distanciaKM = distanciaKM;
        this.consumoMedio = consumoMedio;
        this.valorGasto = valorGasto;
    }

    infoViagemGasolina() {
        console.log(`Uma viagem de ${this.distanciaKM} quilômetros com um carro que faz ${this.consumoMedio} quilômetros por litro de gasolina a R$ ${this.precoDaGasolina} por litro, você gastará R$ ${this.valorGasto} em gasolina.`);
    }

    infoViagemEtanol() {
        console.log(`Uma viagem de ${this.distanciaKM} quilômetros com um carro que faz ${this.consumoMedio} quilômetros por litro de etanol a R$ ${this.precoDoEtanol} por litro, você gastará R$ ${this.valorGasto} em etanol.`);
    }
}

function calculadoraDeGastos(distanciaKM, consumoMedio, combustivelUsado) {
    const calculo = (distanciaKM / consumoMedio) * combustivelUsado;
    return calculo.toFixed(2);
}

let combustivelUsado;
switch (combustivel) {
    case "gasolina":
        combustivelUsado = precoDaGasolina;
        break;
    case "etanol":
        combustivelUsado = precoDoEtanol;
        break;
}

let valorGasto = calculadoraDeGastos(distanciaKM, consumoMedio, combustivelUsado);

if (combustivel === "gasolina") {
    const informacao = new CalculadoraDeViagem(precoDoEtanol, precoDaGasolina, distanciaKM, consumoMedio, valorGasto);
    informacao.infoViagemGasolina();
} else if (combustivel === "etanol") {
    const informacao = new CalculadoraDeViagem(precoDoEtanol, precoDaGasolina, distanciaKM, consumoMedio, valorGasto);
    informacao.infoViagemEtanol();
}
