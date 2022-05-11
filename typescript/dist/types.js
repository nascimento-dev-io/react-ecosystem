"use strict";
// boolean (true/false)
let isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
let message;
message = `foo ${isOpen}`;
// number (int, float, hex, binary...)
let total;
total = 0xff0 || 10 || 102.5;
// array (type[] || Array<type>)
let items;
items = [1, 3, 5, 10];
let platform;
platform = ["linux", "windows", "mcOS"];
// tuple - 'array' com tamanho e tipos definidos.
let title;
title = [1, "foo"];
// enum - conjunto de chave valor.
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any - permite qualquer valor e deve ser evitado
let an;
an = [];
an = 10;
// void - sem retorno.
const logger = () => console.log("log");
// never - nunca vai retornar
function error() {
    throw new Error("error");
}
// object - qualquer coisa que não seja tipo primitivo éum objeto.
let cart;
cart = {
    key: "value",
};
// Inferência de tipo - baseado no retorno ou valor inicial de uma variavel o TS defini o seu tipo.
let newMessage = "hello there"; // tipo definido como string | newMessage: string
// O TS ja define o 'e'como MouseEvent trazendo o autocomplete de forma automática.
window.addEventListener("click", (e) => console.log(e.target));
