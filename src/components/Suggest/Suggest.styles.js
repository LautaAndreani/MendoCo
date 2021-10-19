import styled from "styled-components";

export const SuggestContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap");
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .suggest-title {
    margin-top: 4rem;
    font-size: 1.7rem;
    color: #fff;
    font-weight: 400;
    width: 100%;
    .suggest-bold {
      font-weight: 500;
    }
  }
  .suggest-container {
    display: flex;
    flex-wrap: wrap;
    font-weight: 300;
    margin-top: 2rem;
  }
`;
