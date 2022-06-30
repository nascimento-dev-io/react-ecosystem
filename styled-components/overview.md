## Styled Components

Styled Components é um **lib** que utiliza JavaScript para criar componentes estilizados em React ( CSS in JS ).

Algumas vantagens:
- Styled-components gera nomes de classe exclusivos para seus estilos ( estilos escopados )
- Melhor manutenabilidade pois estilo está vinculado a um componente específico.
- CSS dinâmico baseado em **props**, aumentando flexibilidade de forma simples.
- Sintaxe do CSS puro com vendor prefix inserido de forma automática.

> Você obtém todos esses benefícios enquanto ainda escreve o CSS que conhece.

### Instalação

```bash
# with npm
npm install --save styled-components

# with yarn
yarn add styled-components
```

Styled utiliza `tagged template literals` para criação dos estilos, o retorno da função é a criação de componente React estilizado.

Exemplo de criação de componente de nome **Title** que renderiza uma tag **h1** com alguns estilos.
```js
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5rem;
`;
```
Para utiliza-lo apenas **import** em outro arquivo e use como o exemplo abaixo:

```js
import Title from './styles'; // insira o caminho para o arquivo

const App = () => {
  return (
     <Container> 
      <Title> Algum título</Title>
     </Container>
  )
}
```

### Estilização baseada em props

Podemos passar uma função interpolada para obter acesso a **props** e assim alterar a estilização de um componente, veja o exemplo abaixo:

```js
const Button = styled.button`
  /* a cor é definida de acordo com a prop primary */

  background: ${props => props.primary ? "black" : "white"};
  color: ${props => props.primary ? "white" : "black"};

  padding: 0.25em 1em;
  border-radius: 3px;
`;

// So definir via props o tipo do botão e a estilização é definida
render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

### Estendendo estilos

Podemos estender estilo de um componente, para isso precisamos passar o componente como parâmentro do construtor styled, conforme exemplo abaixo:

```js
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
```
> Usa todos os estilos de Button acrescendo apenas color e border-color diferentes.


### Helpers keyframes e css

O styled disponibiliza a função **keyframes** para criação de animações, essa gera uma instância única que você pode usar em todo o seu aplicativo.

```js
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

//  adicionado no componente estilizado
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

// usado no seu componente
render(
  <Rotate>&lt; 💅🏾 &gt;</Rotate>
);
```

Para criar trechos de código de estilização isolado você pode usar o função **css**, vamos ao exemplo.

```js
...
const rotationAnimation = css`
  animation: ${rotate} 2s linear infinite;
`
```

### ThemeProvider e useTheme
O styled components disponibiliza um componente `ThemeProvider` que utiliza a context API para disponibilizar acesso ao tema para sua árvore de componentes.

O **Provider** possui um atributo **theme** onde é definido o tema que sera disponibilizado para os componentes children.

```js

// Button - estilização
const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
`;

// Componente App
const App = () => {
  const theme = {
    bg: '#333'
    fg: '#f5f5f5'
  }

  <ThemeProvider theme={theme}>     
    <Button>Theme</Button> 
  </ThemeProvider>
}
```
Temos então acesso como visto antes, via props, nesse caso ao **theme** definido no **ThemeProvider**, com isso podemos criar arquivos diferentes para definir temas diferentes como **dark** e **light** e alternar o valor do atributo **theme** criando um toggleTheme para a aplicação, entre outras possibilidades.

> Veja [aqui]()  um exemplo de **toggle theme** com a criação de um novo contexto para isolar lógicas pertinentes.


**Obrigado por ler!**

---
> Documentação Oficial - [Styles Components](https://styled-components.com/docs) 

> Veja também: [Aprendendo React - The Roadmap!](https://dev.to/nascimento_/apredendo-react-the-roadmap-5fii)

> <sub> *Este post tem como objetivo ajudar quem esta começando no aprendizado de React, além de servir como incentivo no meus estudos de React criando outros posts pra fixação do aprendizado.* </sub>


<h4> <em> Me Sigam :) </em> </h4>
<div 
style="display: flex; align-items: center;">

  <a href="https://www.linkedin.com/in/nascimento-dev-io/">
  <img src="https://ik.imagekit.io/Nscmnt/icons/pngwing.com__4__m0IN66sEh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650463280960">
  </a>
  <a href="https://github.com/nascimento-dev-io">
    <img src="https://ik.imagekit.io/Nscmnt/icons/pngwing.com__5__A7_Madm1Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650463360355">
  </a>

</div>