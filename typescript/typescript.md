## TypeScript

Typescript é um superset do JavaScript, com ele você adiciona tipagem estática ao JS.

O Copilador tsc realizar a checagem de tipos em runtime gera código Javascript que é o que o brownser reconhece.

### Vantagens

- Evita resultados inesperados.
- Checagem de tipos no desenvolvimento evitando erros.
- Deixa a IDE/Editor poderosa ajudando nas tipagem/metodos/prorpiedades.

### Desvantagens

- Necessita ser compilado.
- Apredizado inicial dos tips e boas práticas.

### Mitos e Verdades

- Typescript é o JS com tipos, não há a necessidade de aprender tudo de novo.
- Adoção pode ser feita de forma gradual, não precisa reescrever todo o código numa migração.
- A adoção do typescript não isenta o uso de testes, use em conjunto.
- É fundamentado em OO porém funciona em qualquer paradigma.
- Não é muito verboso, não precisa tipar tudo, existe a inferência baseado no retorno de uma função ou valor atribuido na inicialização de uma variável.
- Pode ser utilizado em projetos grandes ou pequenos, ajuda na escalabilidade.
- Não é a mesma coisa que propTypes, pois gera erros e não apenas warnings referente a tipos passados.

### Instalação

- Para instalar o typescript é necessário que ja tenho o nodejs instalado.

```bash
 npm install -g typescript
```

O compilador typescript pode ser chamado como tsc em linha de comando, --watch monitora as alterações.

```bash
tsc <nomeDoArquivo> --watch
```

Podemos criar um arquivo TSconfig, podemos usar o comando tsc --init para a criação do arquivo de configuração do compilador.

```bash
tsc --init
```

Nesse arquivo existe inumeras opções que podemos setar para o tsc, como por exemplo pasta de destino do arquivo gerado, target do JS para compatibilidade, entre outros.

Visite https://aka.ms/tsconfig.json mais informações sobre o arquivo de configuração do typescript.
