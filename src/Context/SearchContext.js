import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

//Provider

function SearchProvider(props) {
  //Hooks

  const [userSearch, setUserSearch] = useState("");
  const [error, setError] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [response, setResponse] = useState([]);

  //Llamada a la API sheet.best
  useEffect(() => {
    if (error) {
      callAPI();
    }
    // eslint-disable-next-line
  }, [userSearch]);

  async function callAPI() {
    const url = `https://sheet.best/api/sheets/785b3891-d28d-420e-b994-a94d7a29d995/Name/${userSearch}`;
    const responseAPI = await axios(url);
    if (responseAPI.data.length === 0) {
      setDataError(true);
      setResponse([]);
      return;
    } else {
      setResponse(responseAPI.data[0]);
      setDataError(false);
    }
  }
  return (
    <SearchContext.Provider
      value={{ setUserSearch, setError, response, dataError, userSearch }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
