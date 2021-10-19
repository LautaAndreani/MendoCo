import { useContext, useState } from "react";
import { FormContainer } from "./Form.styles";
import { Formik } from "formik";
import { FormContext } from "../../Context/FormContext";

function Form() {
  const { setFormData } = useContext(FormContext);
  const [state, setState] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          Name: "",
          Address: "",
          Website: "",
          Open: "",
          Close: "",
          Phone: "",
        }}
        validate={(valores) => {
          //Validaciones
          let errores = {};
          if (!valores.Name) {
            errores.Name = "Ingrese al menos un caracter";
          }
          if (!valores.Phone) {
            errores.Phone = "Ingrese un número de teléfono válido";
          } else if (!/^\d{7,14}$/.test(valores.Phone)) {
            errores.Phone =
              "El número de teléfono solo puede contener números, sin espacios y un máximo de 14 caracteres";
          }
          if (valores.Website.length < 8) {
            errores.Website = "Ingrese un enlace válido";
          }
          if (valores.Address.length < 8) {
            errores.Address = "Ingrese una dirección válida";
          }
          if (valores.Open === "" || valores.Close === "") {
            errores.Open = "Ingrese un horario valido";
            errores.Close = "Ingrese un horario válido";
          }

          return errores;
        }}
        //Envio de formulario
        onSubmit={(valores, { resetForm }) => {
          setFormData(valores);
          console.log("Formulario envia3");
          resetForm();
          setState(true);
          setTimeout(() => setState(false), 5000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <FormContainer>
            <h3 className="form-header">Agregá tu espacio 🏢 </h3>
            <h3 className="form-title">
              Si tenés oficinas de coworking y sos de Mendoza, podes ingresar a
              nuestra base de datos, completando
              <span className="title-span">
                el siguiente formulario. Es totalmente ¡GRATIS!
              </span>
            </h3>
            <div className="row form-container">
              <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      type="text"
                      placeholder="Cívico coworking"
                      id="first-name"
                      name="Name"
                      className=" form-input"
                      value={values.Name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="first-name">Nombre del espacio</label>
                    {touched.Name && errors.Name && (
                      <p className="red-text text-darken-1">{errors.Name}</p>
                    )}
                  </div>
                  <div className="input-field col s6">
                    <input
                      type="text"
                      placeholder="La Pampa 364, Mendoza"
                      name="Address"
                      value={values.Address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="first-name"
                      className=" form-input"
                    />
                    <label htmlFor="first-name">Dirección</label>
                    {touched.Address && errors.Address && (
                      <p className="red-text text-darken-1">{errors.Address}</p>
                    )}
                  </div>
                  <div className="row row-website">
                    <div className="input-field col s12">
                      <input
                        type="text"
                        placeholder="https://www.civicocoworking.com.ar"
                        id="website"
                        name="Website"
                        className=" form-input"
                        value={values.Website}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="website">Sitio web o Red social</label>
                      {touched.Website && errors.Website && (
                        <p className="red-text text-darken-1">
                          {errors.Website}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row row-website">
                    <div className="input-field col s3">
                      <input
                        type="time"
                        name="Open"
                        id="hourAM"
                        className=" form-input"
                        required
                        value={values.Open}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="website">Horarios</label>
                      {touched.Open && errors.Open && (
                        <p className="red-text text-darken-1">{errors.Open}</p>
                      )}
                    </div>
                    <div className="input-field col s3">
                      <input
                        type="time"
                        id="Close"
                        className=" form-input"
                        required
                        value={values.Close}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.Close && errors.Close && (
                        <p className="red-text text-darken-1">{errors.Close}</p>
                      )}
                    </div>
                    <div className="input-field col s6">
                      <input
                        type="text"
                        placeholder="5492616502983"
                        id="phone"
                        name="Phone"
                        className=" form-input"
                        value={values.Phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="phone">Teléfono</label>
                      {touched.Phone && errors.Phone && (
                        <p className="red-text text-darken-1">{errors.Phone}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <button
                        className="btn btn-large waves-effect waves-light btn-submit"
                        type="submit"
                        name="action"
                      >
                        Unirse a MendoCo
                      </button>
                      {state ? (
                        <p className="green-text lighten-1 succes">
                          🛩️ Formulario enviado con éxito, gracias por unirte a
                          MendoCo
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </FormContainer>
        )}
      </Formik>
    </>
  );
}

export default Form;
