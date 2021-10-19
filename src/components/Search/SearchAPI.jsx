import { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";
import Error from "../Error/Error";
import { SearchAPIContainer } from "./searchAPI.styles";
import { FiMapPin, FiClock, FiStar, FiExternalLink } from "react-icons/fi";

function SearchAPI() {
  const { response, dataError, userSearch } = useContext(SearchContext);
  if (response.length === 0) return null;

  return (
    <>
      {dataError ? (
        <Error mensaje=" 🤯 Lo sentimos, no se encontraron resultados" />
      ) : null}
      <SearchAPIContainer>
        <h3 className="response_title">
          Resultado para <span className="title-search">{userSearch}</span>
        </h3>
        <div className="card">
          <div className="card-img">
            <img
              src={response.Images}
              className="card-png"
              alt={response.Name}
            />
          </div>
          <div className="card-content">
            <div className="content-info">
              <h2 className="title">{response.Name}</h2>
              <div className="content-address">
                <FiMapPin color="#FEA141" />
                <span className="addres-text">{response.Address}</span>
              </div>
              {response.Hours === "" ? (
                <span className="addres-text">
                  <FiClock color="#FEA141" />
                  ㅤNo se encontró información{" "}
                </span>
              ) : (
                <div className="content-hours">
                  <FiClock color="#FEA141" />
                  <span className="addres-text">{response.Hours}</span>
                </div>
              )}
              <div className="content-rating">
                <FiStar color="#FEA141" />
                <span className="addres-text">
                  Calificaciones {response.Rating}
                </span>
              </div>
            </div>
            <div className="content-button">
              <button className="content-btn" type="button">
                <a
                  href={response.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-link"
                >
                  Ver en Google Maps <FiExternalLink className="link-ico" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </SearchAPIContainer>
    </>
  );
}

export default SearchAPI;
