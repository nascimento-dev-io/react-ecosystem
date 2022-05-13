import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [drinks, setDrinks] = useState([]);
  const [gender, setGender] = useState("masculino");
  const [image, setImage] = useState({});
  const [description, setDescription] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const data = {
      name,
      language,
      drinks,
      image,
      description,
    };

    console.log(data);
  }

  function handleFiles({ target }) {
    setImage({
      file: target.files[0],
    });
  }

  function handleOnChangeFood({ target }) {
    const CurrentFood = target.value;

    const foodExists = drinks.includes(CurrentFood);

    if (!foodExists) {
      setDrinks([...drinks, CurrentFood]);
      return;
    }
    setDrinks(drinks.filter((food) => food !== CurrentFood));
  }

  return (
    <>
      <h1>Formulário em React</h1>
      <form onSubmit={onSubmit}>
        {/* Input */}
        <label>
          Name:
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </label>
        {/* Select */}
        <label>
          Language:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="javascript">Javascript</option>
            <option value="c#">C#</option>
            <option value="python">Python</option>
          </select>
        </label>
        {/* Checkbox */}
        <div className="checks">
          Drink: <br />
          <label>
            <input
              type="checkbox"
              value="cafe"
              checked={drinks.includes("cafe")}
              onChange={handleOnChangeFood}
            />
            Café
          </label>
          {/* --- */}
          <label>
            <input
              type="checkbox"
              value="cha"
              checked={drinks.includes("cha")}
              onChange={handleOnChangeFood}
            />
            Chá
          </label>
        </div>
        {/* Radio */}
        <div className="radios">
          Gender: <br />
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
        </div>

        {/* Input file */}
        <label>
          Photo:
          <input type="file" onChange={handleFiles} accept="image/*" />
        </label>

        {/* Textarea */}
        <label>
          Bio:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <hr />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
