import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  padding: 10px 15px;

  p {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const ProductImage = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 380px;
  width: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease;
  background-color: transparent;
  background-blend-mode: color;

  button {
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease;
    margin: 20px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
    cursor: pointer;

    button {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
