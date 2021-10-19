import styled from "styled-components";

export const SugerenciaContainer = styled.div`
  background-color: #1a2334;
  margin: 2rem 3rem;
  width: 25rem;
  border-radius: 5px;
  .card-img_container {
    height: 15rem;
    padding: 1rem;
    .card-image {
      width: 100%;
      height: 100%;
      overflow: hidden;
      object-fit: cover;
      border-radius: 5px;
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: scale(1.02);
      }
    }
  }
  .card-content {
    text-align: start;
    padding: 1rem;
    .content-title {
      color: #fff;
      font-size: 1.4rem;
      font-weight: 500;
    }
    .content-address {
      margin-top: 2rem;
      .addres-text {
        font-weight: 400;
        color: #fff;
        margin: 0 1rem;
      }
    }
    .content-hour {
      color: #fff;
      margin: 1rem 0;
      font-weight: 400;
      .hour-text {
        margin: 0 1rem;
        line-height: 1.5;
      }
    }
    .content-btn {
      width: 100%;
      height: 3rem;
      cursor: pointer;
      border: none;
      background-color: #fea141;
      font-weight: 500;
      color: #fff;
      border-radius: 5px;
      transition: background-color 0.3s ease-in-out;
      &:hover {
        background-color: #d38537;
      }
      .btn-link {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #fff;
        width: 100%;
        height: 100%;
        .link-ico {
          margin: 0 0.2rem;
        }
      }
    }
  }
`;
