import logo from "../../assets/mendoco.png";
import { HeaderContainer } from "./Header.styles";

function Header() {
  return (
    <HeaderContainer className="header">
      <img src={logo} alt="" className="header-logo" />
      <h1 className="header-title">
        Encontrá espacios creativos en Mendoza, Argentina
      </h1>
      <h3 className="header-subtitle">
        MendoCo está creado para ayudarte a conseguir una oficina de
        <span className="subtitle-span"> coworking.</span>
      </h3>
    </HeaderContainer>
  );
}

export default Header;
