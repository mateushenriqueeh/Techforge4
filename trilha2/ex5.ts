class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
        console.log(`Compromisso "${compromisso}" adicionado à agenda.`);
    }

    listarCompromissos(): void {
        console.log("Compromissos na agenda:");
        this.compromissos.forEach((compromisso, index) => {
            console.log(`${index + 1}. ${compromisso}`);
        });
    }
}

const agenda = new Agenda();
agenda.adicionarCompromisso("Reunião com o time às 10h");
agenda.adicionarCompromisso("Consulta médica às 15h");
agenda.listarCompromissos();
