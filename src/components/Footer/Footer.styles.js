import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1a2334;
  padding: 1rem 0;
  color: #fff;
  .footer-title {
    font-weight: 300;
    .title-link {
      color: #fea141;
      transition: 0.2s ease-in-out;
      font-weight: 400;
      &:hover {
        border-bottom: 0.5px solid #fea141;
      }
    }
  }
`;
