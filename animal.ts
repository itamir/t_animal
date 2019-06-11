class Animal {
    nome: string; 
    idade: number;
    especie: string;
    
    constructor(nome: string, idade:number, especie:string) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }

    descrever() {
        return "Especie: " + this.especie + ", nome: " + this.nome + ", idade " + this.idade;
    }
}

document.body.innerHTML = new Animal("Cachorro", 3, "Toto").descrever();
