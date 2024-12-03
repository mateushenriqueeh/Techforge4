class Temperatura {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    converterParaFahrenheit(): number {
        return (this.valor * 9/5) + 32;
    }

    converterParaKelvin(): number {
        return this.valor + 273.15;
    }
}

const temp = new Temperatura(25);
console.log(`Temperatura em Fahrenheit: ${temp.converterParaFahrenheit()}°F`);
console.log(`Temperatura em Kelvin: ${temp.converterParaKelvin()}K`);