import styled from "styled-components";

export const SearchAPIContainer = styled.div`
  margin-top: 2rem;
  width: 60%;
  margin: 2rem auto;
  .response_title {
    color: #fff;
    font-weight: 400;
    text-align: start;
    font-size: 1.4rem;
    .title-search {
      color: #fea141;
      font-weight: 500;
    }
  }
  .card {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    background-color: #1a2334;
    border-bottom: 5px solid #fea141;
    padding: 2rem;
    border-radius: 5px;
    .card-img {
      height: 20rem;
      width: 40%;
      overflow: hidden;
      border-radius: 5px;
      @media screen and (max-width: 1200px) {
        width: 100%;
      }
      .card-png {
        object-fit: cover;
        border-radius: 5px;
        width: 100%;
        height: 100%;
      }
    }
    .card-content {
      margin: 0 2rem;
      color: #fff;
      text-align: start;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 40%;
      @media screen and (max-width: 1200px) {
        width: 100%;
      }
      .content-info {
        .title {
          font-size: 1.5rem;
        }
        .content-address,
        .content-hours,
        .content-rating {
          margin: 1.2rem 0;
          .addres-text {
            margin: 0 1rem;
          }
        }
      }
      .content-btn {
        width: 95%;
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
  }
  .title {
    color: #fff;
    font-weight: 500;
  }
`;
