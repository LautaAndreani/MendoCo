import { SuggestContainer } from "./Suggest.styles";
import { useContext } from "react";
import { SuggestContext } from "../../Context/SuggestsContext";
import Sugerencia from "../Sugerencia/Sugerencia";
import shortid from "shortid";


function Suggest() {
    const {response} = useContext(SuggestContext)
    return (
        <SuggestContainer>
            <h3 className="suggest-title">Sugerencias <span className="suggest-bold">MendoCo</span></h3>
            <div className="suggest-container">
            {response.map((sugerencia) => {
                return (
                    <Sugerencia key={shortid()} sugerencia={sugerencia} />
                )
            })}
            </div>
        </SuggestContainer>
    )
}

export default Suggest;
