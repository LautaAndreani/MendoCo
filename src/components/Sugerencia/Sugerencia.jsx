import { FiMapPin,FiClock, FiStar,FiExternalLink } from "react-icons/fi";
import { SugerenciaContainer } from "./Sugerencia.styles";

function Sugerencia({sugerencia}) {
    console.log(sugerencia);
    const {Images,Name, Address, Hours, Rating, url} = sugerencia
    return (
        <SugerenciaContainer>
            <div className="card-img_container">
                <img src={Images} alt={Name} className="card-image" />
            </div>
            <div className="card-content">
                <div className="content-title">
                    {Name}
                </div>
                <div className="content-address">
                    <FiMapPin color="#FEA141"/>
                    <span className="addres-text">{Address}</span>
                </div>
                <div className="content-hour">
                    <FiClock color="#FEA141"/>
                    <span className="hour-text">{Hours}</span>
                </div>
                <div className="content-hour">
                    <FiStar color="#FEA141"/>
                    <span className="hour-text">Calificaciones {Rating}</span>
                </div>
                <button className="content-btn" type="button">
                    <a href={url} target="_blank" rel="noreferrer noopener" className="btn-link">Ver en Google Maps  <FiExternalLink className="link-ico" /></a>
                </button>
            </div>
        </SugerenciaContainer>
    )
}

export default Sugerencia
