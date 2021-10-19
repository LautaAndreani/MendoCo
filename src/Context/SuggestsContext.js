import { createContext, useEffect, useState } from "react";
import axios from "axios";

//Crear Context
export const SuggestContext = createContext();

//Provider
const SuggestProvider = (props) => {
  //State del Context
  const [response, setResponse] = useState([]);

  //DESCOMENTAR CUANDO DEPLOYEE

  useEffect(() => {
    callAPI();
  }, []);

  async function callAPI() {
    const url = `https://sheet.best/api/sheets/785b3891-d28d-420e-b994-a94d7a29d995`;
    const response = await axios(url);
    setResponse(response.data.splice(4, 3));
  }
  return (
    <SuggestContext.Provider value={{ response }}>
      {props.children}
    </SuggestContext.Provider>
  );
};

export default SuggestProvider;
