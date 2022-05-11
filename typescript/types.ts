// boolean (true/false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary...)
let total: number;
total = 0xff0 || 10 || 102.5;

// array (type[] || Array<type>)
let items: number[];
items = [1, 3, 5, 10];

let platform: Array<string>;
platform = ["linux", "windows", "mcOS"];

// tuple - 'array' com tamanho e tipos definidos.
let title: [number, string];
title = [1, "foo"];

// enum - conjunto de chave valor.
enum Colors {
  white = "#fff",
  black = "#000",
}

// any - permite qualquer valor e deve ser evitado
let an: any;
an = [];
an = 10;

// void - sem retorno.
const logger = (): void => console.log("log");

// null e undefined - null: sem valor. | undefined: não definido.
type Bla = string | undefined;

// never - nunca vai retornar
function error(): never {
  throw new Error("error");
}

// object - qualquer coisa que não seja tipo primitivo éum objeto.
let cart: object;
cart = {
  key: "value",
};

// Inferência de tipo - baseado no retorno ou valor inicial de uma variavel o TS defini o seu tipo.

let newMessage = "hello there"; // tipo definido como string | newMessage: string

// O TS ja define o 'e'como MouseEvent trazendo o autocomplete de forma automática.
window.addEventListener("click", (e) => console.log(e.target));
