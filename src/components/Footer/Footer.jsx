import { FooterContainer } from "./Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      <p className="footer-title">
        Hecho por{"  "}
        <a
          href="https://github.com/LautaAndreani"
          target="_blank"
          rel="noreferrer noopener"
          className="title-link"
        >
          Lautaro
        </a>
      </p>
    </FooterContainer>
  );
}

export default Footer;
