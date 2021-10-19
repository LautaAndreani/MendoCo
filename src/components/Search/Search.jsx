import { useState, useContext } from "react";
import { SearchContainer } from "./Search.styles";
import { SearchContext } from "../../Context/SearchContext";
import Error from "../Error/Error";

function Search() {
  //Valor del input del usuario
  const [input, setInput] = useState("");
  //ErrorInput
  const [inputError, setInputError] = useState(false);

  //Context
  const { setUserSearch, setError } = useContext(SearchContext);

  //Envio de formulario
  function handleSubmit(e) {
    e.preventDefault();
    if (input === "") {
      return setInputError(true);
    }
    setUserSearch(input);
    setInput("");
    setError(true);
    setInputError(false);
  }
  return (
    <SearchContainer>
      <div className="search">
        <div className="search-img">
          {/* <img src={user} alt="" className="img-boy" /> */}
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_rin5t00k.json"
            background="transparent"
            style={{ width: "300px" }}
            speed="0.5"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="search-content">
          <h4 className="content-title">
            Buscá información sobre algún
            <span className="title-span">espacio en específico</span>
          </h4>
          <form className="content-form" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Campus Olegario, Redcouch..."
              className="form-input"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button type="submit" className="form-btn">
              Buscar
            </button>
          </form>
          {inputError ? (
            <Error mensaje="✍ Ingrese al menos un caracter" />
          ) : null}
        </div>
      </div>
    </SearchContainer>
  );
}

export default Search;
