import { BsCartPlus } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";
import { useDispatch } from "react-redux";
import { addProductCart } from "../../redux/cart/slice";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const hadleProductClick = () => {
    dispatch(addProductCart(product))
  }
  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={hadleProductClick}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
