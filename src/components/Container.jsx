import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 46px auto; 
  justify-content: center;
  @media (max-width: 320px) {
    margin: 20px auto; 
    max-width: 320px;
  }
`;
