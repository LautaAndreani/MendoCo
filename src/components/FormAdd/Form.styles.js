import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 3rem 0;
  .form-header {
    font-size: 1.7rem;
    color: #fff;
    font-weight: 500;
  }
  .form-title {
    color: #fff;
    line-height: 2rem;
    font-size: 1.4rem;
    margin: 2rem 0;
    .title-span {
      display: block;
    }
  }
  .form-container {
    width: 70%;
    color: #fff;
    background-color: #1a2334;
    padding: 1rem;
    margin: 3rem auto;
    border-radius: 5px;
    .form-input {
      font-family: "Rubik", sans-serif;
      color: #fff;
      ::placeholder {
        color: #354563;
      }
    }
    .row-website {
      padding: 0 0.6rem;
    }
    .btn-submit {
      font-family: "Rubik", sans-serif;
      width: 80%;
      font-weight: 500;
      background-color: #fea141;
      border-radius: 5px;
    }
    .succes {
      margin-top: 2rem;
    }
  }
`;
