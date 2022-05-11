## ESlint


ESLint é uma ferramenta para identificar e relatar padrões encontrados no código ECMAScript / JavaScript, com o objetivo de tornar o código mais consistente e evitar bugs.

``NodejJS`` é pre requisito para o uso do ESLint.

```bash
# instalação usando npm ou yarn

$ npm install eslint --save-dev

# or

$ yarn add eslint --dev

```

Em seguida, você deve definir um arquivo de configuração e a maneira mais fácil de fazer isso é usar a flag --init, o uso do --init presume que você já tenha um package.json. Se não, certifique-se de roda npm init ou yarn init antes.

```bash
$ npx eslint --init

# or

$ yarn run eslint --ini
```

Depois disso, você pode executar o ESLint em qualquer arquivo ou diretório como este:

```bash
$ npx eslint yourfile.js

# or

$ yarn run eslint yourfile.js
```

### Arquivo de configuração

Após a execução `eslint --init`, você terá um `.eslintrc.{js,yml,json}` em seu diretório. Nele, você verá algumas regras configuradas assim:


```JSON
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```
s nomes `"semi"` e `"quotes"`são os nomes das regras no ESLint. O primeiro valor é o nível de erro da regra e pode ser um destes valores:

- `"off"` ou `0` - desligue a regra
- `"warn"` ou `1` - ativar a regra como um aviso (não afeta o código de saída)
- `"error"` ou `2` - ativar a regra como um erro (o código de saída será 1).

Seu arquivo de configuração `.eslintrc.{js,yml,json}` também incluirá a linha:


```JSON
"extends": "eslint:recommended"
```
Por causa desta linha, todas as regras marcadas com " ✓ " na página de regras serão ativadas. Como alternativa, você pode usar configurações que outros criaram pesquisando por "eslint-config" em npmjs.com . O ESLint não irá lintar seu código, a menos que você estenda de uma configuração compartilhada ou ative explicitamente as regras em sua configuração.

Além do arquivo de configuração que ditam as regras, essas podem ser extendidas de styles guides famosas como o AirBnb, seja extensões pernalizadas é possi também criar um arquivo `.eslintignore` para ignora arquivos/pastas da analise.

- Maiores detalhes [documentação](https://eslint.org/docs/user-guide/configuring/) !