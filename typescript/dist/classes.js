"use strict";
// Criação e tipos em classes.
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
const jn = new UserAccount("Jorge Nascimento", 32);
console.log(jn);
jn.logDetails();
// extendendo classes e modificadores.
// readonly - acessivel apenas para leitura fora da classe.
// private - acessivel apenas dentro da classe.
// protected - acessivel dentro da classe e subclasses apenas.
// public - default - pode ser acessado e alterado fora da classe.
// getters e setters - métodos para acesso e alteração em classes.
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel() {
        return this.level;
    }
    set setNickname(n) {
        this.nickname = n;
    }
}
const loki = new CharAccount("Loki", 25, "lksCat", 125);
loki.logDetails();
console.log(loki.getLevel);
loki.setNickname = "lkCat";
console.log(loki.nickname);
