// Styles
import { useSelector } from "react-redux";
import CartItem from "../cart-item/index"
import * as Styles from "./styles";
const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const { products } = useSelector((rootReducer)=> rootReducer.cartReducer);
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {
          products.map((product) => (
            <CartItem key={product.id} product={product}/>
          ))
        }
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
