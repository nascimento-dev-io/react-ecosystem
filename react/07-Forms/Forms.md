## Formulários em React

Em React formulários são controlados com [estados](./../00-code-examples/src/examples/Estados.js), isso concede um pode maior sobe 
manipulação de eventos (onChange, onSubmit) e controle sobre seus valores, pois o react se torna a única 'fonte de verdade', form que são manipulados com estados em react são chamados de **(controlled component)**.

*Vamos ao exemplos de formulários controlados*


### Input
```jsx
import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    console.log(name)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};
```

- 1 -- Criamos um estado para armazenar e atualizar o **name**.
- 2 -- Controlamos o **input** setando seu **value** com o estado **name**.
- 3 -- No **onChange** atualizamos o **value** através da função **setName**.
- 4 -- No **onSubmit** temos acesso ao estado **name** para manipulação.

Então entendemos que dessa forma temos maior controle sobe o estados dos componentes de formulários, na sua manipulação posteriormente. 

Na sequência vamos ver os principais elementos de formulário e como manipulamos com o react.


### Select

Em React, em vez de usar o atributo selected para definir o valor selecionado, usa-se um atributo value na raiz da tag select. Isso é mais conveniente em um componente controlado, porque você só precisa atualizá-lo em um só lugar.

```jsx
  <select value={language} onChange={(e) => setLanguage(e.target.value)}>
    <option value="javascript">Javascript</option>
    <option value="c#">C#</option>
    <option value="python">Python</option>
  </select>
```
> Você pode passar um array para o atributo value, permitindo que você selecione várias opções em uma tag select:

```jsx
<select multiple={true} value={['B', 'C']}>
```


### Checkbox

O elemento checkbox pode ter seu estado manipulando em React. para isso utilizando o atributo **checked** setando a ele uma condição que retorne um booleano baseado no estado que pode ser um booleano simples, ou uma condição mais complexa quando existir múltiplas escolhas.

```jsx
<input
  type="checkbox"
  checked={checkedBoolean}
  onChange={() => setCheckedBoolean(!checkedBoolean)}
/>
checkbox
```

### Radio

O elemento radio por ser de escolha única, podemos comparar o atributo checked com o estado atual.

```jsx
<label>
  <input
    type="radio"
    name="gender"
    value="masculino"
    checked={gender === "masculino"}
    onChange={({ target }) => setGender(target.value)}
  />
  Masculino
</label>

<label>
  <input
    type="radio"
    name="gender"
    value="feminino"
    checked={gender === "feminino"}
    onChange={({ target }) => setGender(target.value)}
  />
  Feminino
</label>
```
### File Input

Em HTML, o `<input type="file">` permite ao usuário escolher um ou mais arquivos de seu dispositivo para serem enviados para um servidor.
Como seu valor é de somente leitura, ele é um componente não controlado do React.

Você pode criar um estado para armazenar o objeto [File](https://developer.mozilla.org/pt-BR/docs/Web/API/File/Using_files_from_web_applications) ou um array dependendo da necessidade, e utilizar esse estado em alguma lógica na interface e envio para o servidor.

### Textarea

O **Textarea** no react possui um atributo **value** para que seja manipulado, o que o torna muito semelhante ao elemento input.

```jsx
<textarea 
  value={description} 
  onChange={(e) => setDescription(e.target.value)} 
/>
```

### Manipulando Múltiplos Inputs

Quando você precisa manipular múltiplos inputs controlados, você pode adicionar um atributo *name* a cada elemento e deixar a função manipuladora escolher o que fazer com base no valor de **event.target.name**.

*Exemplo*
```jsx
function handleInputChange(event) {
    const { type, name, value } = event.target;

    if (type === "checkbox") {
      const drinks = formData.drinks || [];
      const drinkExists = drinks.includes(value);

      if (!drinkExists) {
        const drinksUpdated = [...drinks, value];

        setFormData({ ...formData, [name]: drinksUpdated });
        return;
      }

      const drinksUpdated = drinks.filter((drink) => drink !== value);

      setFormData({ ...formData, [name]: drinksUpdated });
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }
```
Existem várias formas de criar lógica para esse tipo de caso e esse é apenas um exemplo.

Geralmente se usa lib's para manipulação e validação de formulário em React, tais como [formik](https://formik.org/docs/overview), [react-hooks.form](https://react-hook-form.com/) entre outras.



https://pt-br.reactjs.org/docs/forms.html




