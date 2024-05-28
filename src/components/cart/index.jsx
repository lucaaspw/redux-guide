// Styles
import { useSelector } from "react-redux";
import CartItem from "../cart-item/index"
import * as Styles from "./styles";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selector";
const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const { products } = useSelector((rootReducer)=> rootReducer.cartReducer);
  const productsTotalPrice = useSelector(selectProductsTotalPrice)
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
        <Styles.CartTotal>{productsTotalPrice ? `R$ ${productsTotalPrice}` : "Seu Carrinho está vazio :/" }</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
