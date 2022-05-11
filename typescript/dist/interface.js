"use strict";
// interface descrevem estrutura de objetos.
const tlou = {
    id: 528,
    title: "The Last Of Us",
    description: "The Best game  in the World",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilar: (title) => {
        console.log(`Similar game to ${title}: Uncharted, A plague Tale, Metro`);
    },
};
if (tlou.getSimilar)
    tlou.getSimilar(tlou.title);
const leftbehind = {
    title: "The Last Of Us - Left Behind",
    description: "You Play Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"],
};
// criação de class baseado em interface - nesse caso a classe precisa implementar o que tiver na interface.
class CreateGame {
    constructor(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
