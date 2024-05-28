import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #222222;
  display: flex;
  justify-content: center;
  color: #eee;
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  .contentHeader{
    width: 100%;
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  div {
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }

    &:nth-child(1) {
      margin-right: 40px;
    }
  }

`;
