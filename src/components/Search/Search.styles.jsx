import styled from "styled-components";

export const SearchContainer = styled.main`
  background-color: #1a2334;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  .search {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .search-content {
      text-align: left;
      margin: 0 10rem;
      .content-title {
        color: #fff;
        font-size: 1.8rem;
        font-weight: 500;
        margin: 1rem 0;
        .title-span {
          display: block;
        }
      }
      .content-form {
        background-color: #f6f7f9;
        border-radius: 5px;
        padding: 1rem;
        width: 100%;
        .form-input {
          height: 3rem;
          padding: 0 1rem;
          background: none;
          border: none;
          width: 88%;
          outline: none;
          margin-left: 0.2rem;
          ::placeholder {
            color: #6c6e70;
          }
        }
        .form-btn {
          height: 3rem;
          /* font-weight: 600; */
          padding: 0 1rem;
          width: 95%;
          background: #fea141;
          border: none;
          border-radius: 5px;
          margin: 0 0.5rem;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
          &:hover {
            background-color: #d38537;
          }
        }
      }
    }
  }
`;
