import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  padding: 40px 0;
  grid-row-gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
