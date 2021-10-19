import { createContext, useEffect, useState } from "react";
import axios from "axios";

//Context

export const FormContext = createContext();

//Provider

function FormProvider(props) {
  //Info tomada del envío del formulario
  const [FormData, setFormData] = useState({});
  // LLamada a la API metodo post
  useEffect(() => {
    if (FormData.Name === undefined) {
      return null;
    } else {
      CallAPI();
    }
    //eslint-disable-next-line
  }, [FormData]);

  async function CallAPI() {
    const { Name, Website, Address, Open, Close, Phone } = FormData;
    const url = `https://sheet.best/api/sheets/785b3891-d28d-420e-b994-a94d7a29d995`;
    // eslint-disable-next-line
    const response = await axios({
      method: "POST",
      url: url,
      data: {
        Name: Name,
        Website: Website,
        Address: Address,
        Hours: `${Open}AM - ${Close}PM Sábados y Domingos Cerrado`,
        Phone: Phone,
      },
    });
  }
  return (
    <FormContext.Provider value={{ setFormData }}>
      {props.children}
    </FormContext.Provider>
  );
}

export default FormProvider;
