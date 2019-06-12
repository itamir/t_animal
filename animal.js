var Animal = /** @class */ (function () {
    function Animal(nome, idade, especie) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }
    Animal.prototype.descrever = function () {
        return "Especie: " + this.especie + ", nome: " + this.nome + ", idade " + this.idade;
    };
    return Animal;
}());
var a = new Animal("Cachorro", 3, "Toto");
console.log(a.descrever());
